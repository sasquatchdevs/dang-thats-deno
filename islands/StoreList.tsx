import { StoreCard } from "../components/StoreCard.tsx";
import type { Store } from "../generated/client/deno/index.d.ts";

export default function StoreList({ stores }: { stores: Store[] }) {
  return (
    <div class="flex flex-wrap">
      {stores &&
        stores?.map((store) => <StoreCard key={store.id} store={store} />)}
    </div>
  );
}
