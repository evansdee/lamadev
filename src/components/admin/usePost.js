"use client";
import { deletePost, deleteUser } from "@/libs/action";
import { getPosts, getUsers } from "@/libs/services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function usePosts() {
  // Fetch all posts
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return { posts, isLoading, error };
}

export function useUsers() {
  // Fetch all posts
  const { data: users, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return { users, isLoading, error };
}



export function useDeletePost() {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: async ({ id }) => {
      await deletePost({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]); // Refetch posts after deletion
    },
  });

  return { mutate, isLoading, isError };
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: async ({ id }) => {
      await deleteUser({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]); // Refetch posts after deletion
    },
  });

  return { mutate, isPending, isError };
}
