import { createProject } from "@/api/project";
import { QUERY_KEYS } from "@/lib/constants";
import type { UseMutationCallback } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateProject(callbacks?: UseMutationCallback) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProject,
    onSuccess: (createdProject) => {
      if (callbacks?.onSuccess) callbacks.onSuccess();

      // 1. project 페이지
      queryClient.resetQueries({
        queryKey: QUERY_KEYS.project.list,
      });

      // 2. profile 페이지
      queryClient.resetQueries({
        queryKey: QUERY_KEYS.project.userList(createdProject.owner_id),
      });
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
