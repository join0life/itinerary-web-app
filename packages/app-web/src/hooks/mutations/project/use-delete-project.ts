import { deleteProject } from "@/api/project";
import { QUERY_KEYS } from "@itinerary/shared";
import type { Project, ProjectEntity, UseMutationCallback } from "@itinerary/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteProject(callbacks?: UseMutationCallback) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProject,
    onSuccess: (deletedProject) => {
      if (callbacks?.onSuccess) callbacks.onSuccess();

      // 1. project 페이지
      queryClient.resetQueries({
        queryKey: QUERY_KEYS.project.list,
      });
      //2. profile 페이지
      queryClient.resetQueries({
        queryKey: QUERY_KEYS.project.userList(deletedProject.owner_id),
      });
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
