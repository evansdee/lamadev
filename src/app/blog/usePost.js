
"use client"
import { getPosts } from "@/libs/services";
import { useQuery, useQueryClient } from "@tanstack/react-query";


export function usePost() {
    const queryClient = useQueryClient();
  
    const { data, isLoading, error } = useQuery({
      queryKey: ["posts"],
      queryFn: getPosts,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["posts"] });
      },
    });
  
    return { data, isLoading, error };
  }