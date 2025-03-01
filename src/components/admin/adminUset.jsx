import { getUsers } from "@/libs/services";
import sty from "./adminPost.module.css";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import Users from "./Users";

// export default function AdminUser() {
export default async function AdminUser() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return (
    <div className={sty.container}>
      <h1>Users</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Users />
      </HydrationBoundary>
    </div>
  );
}
