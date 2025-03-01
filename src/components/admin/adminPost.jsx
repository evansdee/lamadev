import { getPosts } from "@/libs/services";
import sty from "./adminPost.module.css";
import Posts from "./Posts";
import {dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

// export default function AdminPost() {
export default async function AdminPost() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <div className={sty.container}>
      <h1>Posts</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Posts />
      </HydrationBoundary>
    </div>
  );
}
