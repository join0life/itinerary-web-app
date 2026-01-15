import { joinProject } from "@/api/project";
import { QUERY_KEYS } from "@/lib/constants";
import type { UseMutationCallback } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useJoinProject(callbacks?: UseMutationCallback) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: joinProject,
    onSuccess: (_, variables) => {
      if (callbacks?.onSuccess) callbacks.onSuccess();

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.project.byId(variables.projectId),
      });

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.project_members.listByProject(variables.projectId),
      });
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
