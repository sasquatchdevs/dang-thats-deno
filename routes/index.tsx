import { Layout } from "../components/Layout.tsx";
import StoreList from "../islands/StoreList.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import prisma from "../db/client.ts";
import type { Store } from "../generated/client/deno/index.d.ts";

export const handler: Handlers<Store[]> = {
  async GET(_req, ctx) {
    const stores = await prisma.store.findMany({});
    return ctx.render(stores ?? []);
  },
};

export default function Home(props: PageProps<Store[]>) {
  return (
    <Layout pageTitle="Home">
      <div class="container mx-auto max-w-7xl h-full">
        <div class="p-8">
          <h2 class="text-6xl text-gray-800 my-12">
            Stores
          </h2>
          <div class="-ml-8 -mt-8">
            <StoreList stores={props.data} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
