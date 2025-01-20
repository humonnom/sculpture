import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";
import { HydrateClient } from "./_components/client-only";
import { ProductsList } from "./_components/products-list";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h2 className="text-2xl font-bold mb-4">Products List</h2>
        <ProductsList />
      </main>
    </HydrateClient>
  );
}
