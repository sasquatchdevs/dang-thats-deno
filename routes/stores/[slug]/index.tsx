import { PageProps } from "$fresh/server.ts";
import { Layout } from "../../../components/Layout.tsx";

export default function StoreDetails(props: PageProps) {
  const { slug } = props.params;
  return (
    <Layout pageTitle="Home">
      <div class="container mx-auto max-w-7xl h-full">
        <div class="p-8">
          <h2 class="text-6xl text-gray-800 my-12">
            {slug} details
          </h2>
          <div class="-ml-8 -mt-8">
          </div>
        </div>
      </div>
    </Layout>
  );
}
