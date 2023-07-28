import { Handlers, PageProps } from "$fresh/server.ts";
import { Layout } from "../components/Layout.tsx";
import StoreList from "../islands/StoreList.tsx";
import { toObject } from "../utils/toObj.ts";
import { supabase } from "../lib/supabase.ts";
import { type User } from "supabase";
import { Store } from "../types/index.d.ts";

interface IPagePayload {
  stores: Store[];
  user?: User;
}

export const handler: Handlers<IPagePayload> = {
  async GET(_req, ctx) {
    const { data: stores } = await supabase.from("Store").select("*").eq(
      "status",
      1,
    );

    return ctx.render(
      {
        stores: toObject(stores ?? []),
        user: ctx.state.user as IPagePayload["user"],
      },
    );
  },
};

export default function Home({ data }: PageProps<IPagePayload>) {
  return (
    <Layout pageTitle="Home" user={data.user}>
      <div class="container mx-auto max-w-7xl h-full">
        <div class="p-8">
          <h2 class="text-6xl text-gray-800 my-12">
            Stores
          </h2>
          <div class="-ml-8 -mt-8">
            <StoreList stores={data.stores} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
