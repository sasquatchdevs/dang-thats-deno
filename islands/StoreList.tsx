import { StoreCard } from "../components/StoreCard.tsx";
// import { Handlers, PageProps } from "$fresh/server.ts";
// import prisma from "../db/client.ts";
import type { Store } from "../generated/client/deno/index.d.ts";

export default function StoreList(props: { stores: Store[] }) {
  console.log({ props });
  return (
    <div class="flex flex-wrap">
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
    </div>
  );
}
