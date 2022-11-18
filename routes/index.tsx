import { Layout } from "../components/Layout.tsx";
import StoreList from "../islands/StoreList.tsx";

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div class="container mx-auto max-w-7xl h-full">
        <div class="p-8">
          <h2 class="text-6xl text-gray-800 my-12">
            Stores
          </h2>
          <div class="-ml-8 -mt-8">
            <StoreList />
          </div>
        </div>
      </div>
    </Layout>
  );
}
