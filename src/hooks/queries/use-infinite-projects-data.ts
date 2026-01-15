import { fetchProjects } from "@/api/project";
import {PAGE_SIZE, QUERY_KEYS } from "@/lib/constants";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";

export function useInfiniteProjectsData(ownerId?: string) {
  const queryClient = useQueryClient();

  return useInfiniteQuery({
    queryKey: !ownerId ? QUERY_KEYS.project.list : QUERY_KEYS.project.userList(ownerId),
    queryFn: async ({ pageParam }) => {
      const from = pageParam * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      const projects = await fetchProjects({ from, to, ownerId, });
      projects.forEach((project) => {
        queryClient.setQueryData(QUERY_KEYS.project.byId(project.id), project);
      });
      return projects.map((project) => project.id);
    },

    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < PAGE_SIZE) return undefined;
      return allPages.length;
    },

    staleTime: Infinity,
  });
}
