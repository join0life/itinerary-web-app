import { createEvent } from "@/api/event";
import { QUERY_KEYS } from "@itinerary/shared";
import type { UseMutationCallback } from "@itinerary/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateEvent(callbacks?: UseMutationCallback) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createEvent,
    onSuccess: (_, event) => {
      if (callbacks?.onSuccess) callbacks.onSuccess();

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.event.listByProject(event.projectId),
      });
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
