import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import type { User } from "supabase";
import { redis } from "../lib/redis.ts";

export type ServerState = {
  user: User | null;
  error: { code: number; msg: string } | null;
};

const isProtectedRoute = (path: string) => {
  const pages = ["/my", "/stores/create"];
  return pages.filter((p) => path.includes(p))?.length > 0;
};

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<ServerState>,
) {
  const url = new URL(req.url);
  const cookies = getCookies(req.headers);
  const access_token = cookies.auth;

  const protected_route = isProtectedRoute(url.pathname);

  const headers = new Headers();
  headers.set("location", "/auth/login");

  if (protected_route && !access_token) {
    // Can't use 403 if we want to redirect to home page.
    return new Response(null, { headers, status: 303 });
  }

  if (access_token) {
    const session = await redis.get(access_token);
    if (protected_route && !session) {
      return new Response(null, { headers, status: 303 });
    }
    const user = JSON.parse(session!.toString())?.user;
    ctx.state.user = user;
  }

  return await ctx.next();
}
