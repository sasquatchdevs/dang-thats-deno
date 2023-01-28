import { Handlers } from "$fresh/server.ts";
import { supabase } from "../../../lib/supabase.ts";
import { setCookie } from "$std/http/cookie.ts";

interface ILoginFormData {
  email: string;
  password: string;
}

export const handler: Handlers = {
  POST: async (req) => {
    const url = new URL(req.url);
    const form = await req.formData();

    const headers = new Headers();
    headers.set("location", "/");

    const email = String(form.get("email"));
    const password = String(form.get("password"));

    const { data: { session, user }, error } = await supabase.auth
      .signInWithPassword({
        email,
        password,
      });

    if (error != null || user == null || session == null) {
      // TODO: fixme
      return new Response(null, { status: 400 });
    }

    setCookie(headers, {
      name: "auth",
      value: session.access_token,
      maxAge: session.expires_in,
      sameSite: "Lax",
      domain: url.hostname,
      path: "/",
      secure: true,
    });

    return new Response(null, {
      status: 303,
      headers,
    });
  },
};
