import { Handlers } from "$fresh/server.ts";
import { supabase } from "../../../lib/supabase.ts";

interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const handler: Handlers = {
  async POST(req) {
    const form = await req.formData();
    const email = form.get("email");
    const password = form.get("password");

    const { data: { user, session }, error } = await supabase.auth.signUp({
      email: String(email),
      password: String(password),
    });

    if (error != null) {
      // TODO: Add some actual error handling.
      console.error(error);
      return new Response(null, { status: 500 });
    }

    if (user && !session) {
      console.error("needs to verify email");
      // return new Response(null, { status: 400 });
    }

    const exists = await supabase.auth.getUser(String(user));
    if (exists?.data.user) {
      console.log("user already exists");
      return new Response(null, { status: 400 });
    }

    const headers = new Headers();
    headers.set("location", "/");

    return new Response(null, {
      status: 303,
      headers,
    });
  },
};
