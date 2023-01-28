import { Layout } from "../../components/Layout.tsx";
import { InputField } from "../../components/forms/InputField.tsx";
import { Handlers } from "$fresh/server.ts";
import prisma from "../../db/client.ts";
import { getCookies } from "$std/http/cookie.ts";

interface IFormData {
  name: string;
  description: string;
  address: string;
  hero?: string;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    if (cookies.auth === "bar") {
      return ctx.render!();
    } else {
      const url = new URL(req.url);
      url.pathname = "/auth/login";
      return Response.redirect(url);
    }
  },
  POST: async (req, ctx) => {
    const body = await req.formData();
    const newStore = await prisma.store.create({
      data: {
        name: body.get("name") as string,
        slug: body.get("name") as string, // TODO: slugify
        description: body.get("description") as string,
        heroImg: "", // TODO: upload to cloudinary
        address: body.get("address") as string,
        lat: 0.0, // TODO: get lat
        lng: 0.0, // TODO: get long
        status: 0, // 0 = Draft
        tags: "", // TODO: comma seperated
        author: {
          // TODO: AUTH
          connectOrCreate: {
            where: {
              email: "mark@me.com",
            },
            create: {
              name: "Mark Ambro",
              email: "mark@me.com",
              avatar: "mark.jpg",
              hash: "mark@me.com",
              salt: "mark@me.com",
            },
          },
        },
      },
    });
    const origin = new URL(req.url).origin;
    return Response.redirect(new URL(origin + `/stores/${newStore?.slug}`));
  },
};

export default function Create() {
  return (
    <Layout pageTitle="Add a Store">
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
