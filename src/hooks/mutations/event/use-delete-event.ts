import { deleteEvent } from "@/api/event";
import { QUERY_KEYS } from "@/lib/constants";
import type { UseMutationCallback } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteEvent(callbacks?: UseMutationCallback) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteEvent,
    onSuccess: (deletedEvent) => {
      if (callbacks?.onSuccess) callbacks.onSuccess();

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.event.listByProject(deletedEvent.project_id),
      });
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
