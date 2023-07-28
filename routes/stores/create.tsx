import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { Layout } from "../../components/Layout.tsx";
import { InputField } from "../../components/forms/InputField.tsx";
import { supabase } from "../../lib/supabase.ts";
import { type User } from "supabase";

interface IPagePayload {
  user: User;
}

export const handler: Handlers<IPagePayload> = {
  GET(_req, ctx) {
    return ctx.render(
      {
        user: ctx.state.user as IPagePayload["user"],
      },
    );
  },
  POST: async (req, ctx) => {
    const form = await req.formData();
    const { data: newStore } = await supabase.from("Store").insert({
      name: form.get("name") as string,
      slug: form.get("name") as string, // TODO: slugify
      description: form.get("description") as string,
      heroImg: "", // TODO: upload to cloudinary
      address: form.get("address") as string,
      lat: 0.0, // TODO: get lat
      lng: 0.0, // TODO: get long
      status: 0, // 0 = Draft
      tags: "", // TODO: comma seperated
      authorId: ctx.state.user,
    }).select();
    const origin = new URL(req.url).origin;
    return Response.redirect(
      new URL(origin + `/stores/${newStore?.[0]?.slug}`),
    );
  },
};

export default function Create({ data }: PageProps<IPagePayload>) {
  return (
    <Layout pageTitle="Add a Store" user={data.user}>
      <div class="container mx-auto max-w-7xl h-full">
        <div class="p-8">
          <h2 class="text-6xl text-gray-800 my-12">
            Add a Store
          </h2>
          <div class="bg-white p-8">
            <form
              className="flex flex-col"
              method="POST"
              encType="multipart/form-data"
            >
              <InputField name="name" required />
              <InputField name="description" required />
              <InputField name="hero" />
              <InputField name="address" required />
              <div className="flex flex-row justify-between">
                <InputField name="lng" type="number" />
                <div className="w-8" />
                <InputField name="lat" type="number" />
              </div>
              <InputField name="tags" />
              <button
                type="submit"
                class="border-none bg-yellow-400 text-gray-800 font-semibold w-full p-3 mt-6 uppercase"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
