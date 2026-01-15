import { updateEvent } from "@/api/event";
import { QUERY_KEYS } from "@/lib/constants";
import type { EventItemWithConfirmButton, UseMutationCallback } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateEvent(callbacks?: UseMutationCallback) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateEvent,

    onMutate: async (updatedEvent) => {
      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.event.listByProject(updatedEvent.project_id!),
      });

      const prevEvents = queryClient.getQueryData<EventItemWithConfirmButton[]>(
        QUERY_KEYS.event.listByProject(updatedEvent.project_id!),
      );
      queryClient.setQueryData<EventItemWithConfirmButton[]>(
        QUERY_KEYS.event.listByProject(updatedEvent.project_id!),
        (prevEvents) => {
          if (!prevEvents) return [];
          return prevEvents.map((prevEvent) =>
            prevEvent.id === updatedEvent.id
              ? { ...prevEvent, ...updatedEvent }
              : prevEvent,
          );
        },
      );

      return { prevEvents };
    },

    onError: (error, variables, context) => {
      if (context && context.prevEvents) {
        queryClient.setQueryData<EventItemWithConfirmButton[]>(
          QUERY_KEYS.event.listByProject(variables.project_id!),
          context.prevEvents,
        );
      }
      if (callbacks?.onError) callbacks.onError(error);
    },

    onSuccess: (updatedEvent) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.event.listByProject(updatedEvent.project_id),
      });
      if (callbacks?.onSuccess) callbacks.onSuccess();
    },
  });
}
