import { Handlers, PageProps } from "$fresh/server.ts";
import { Layout } from "../components/Layout.tsx";
import prisma from "../db/client.ts";
import type { Store } from "../generated/client/deno/index.d.ts";
import StoreList from "../islands/StoreList.tsx";
import { toObject } from "../utils/toObj.ts";

import { getCookies } from "$std/http/cookie.ts";
import { ServerState } from "./_middleware.ts";

interface IPagePayload {
  stores: Store[];
  isAuthenticated: boolean;
  state: Partial<ServerState>;
}

export const handler: Handlers<IPagePayload> = {
  async GET(_req, ctx) {
    const cookies = getCookies(_req.headers);

    const stores = await prisma.store.findMany({
      take: 10,
      where: { status: { equals: 0 } },
    });
    return ctx.render(
      {
        stores: toObject(stores),
        isAuthenticated: cookies.auth === "bar",
        state: ctx.state,
      },
    );
  },
};

export default function Home(props: PageProps<IPagePayload>) {
  return (
    <Layout pageTitle="Home">
      <div>
        You currently {props.data.state.user ? "are" : "are not"} logged in.
      </div>
      {!props.data.state.user
        ? <a href="/auth/login">Please Login</a>
        : <a href="/api/auth/logout">Logout</a>}
      <div class="container mx-auto max-w-7xl h-full">
        <div class="p-8">
          <h2 class="text-6xl text-gray-800 my-12">
            Stores
          </h2>
          <div class="-ml-8 -mt-8">
            <StoreList stores={props.data.stores} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
