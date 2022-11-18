import { StoreCard } from "../components/StoreCard.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { User } from "../db/models/User.ts";

interface Store {
  id: number;
}

export const handler: Handlers<any[]> = {
  async GET(_req, ctx) {
    const stores = await User.all(); //db..findOne({ id: ctx.params.id });
    if (!stores) {
      return new Response("Project not found", { status: 404 });
    }
    return ctx.render(stores);
  },
};

export default function StoreList(props: PageProps<Store[]>) {
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
