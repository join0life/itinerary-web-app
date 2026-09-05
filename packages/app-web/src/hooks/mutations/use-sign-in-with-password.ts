import { signInWithPassword } from "@/api/auth";
import type { UseMutationCallback } from "@itinerary/shared";
import { useMutation } from "@tanstack/react-query";

export function useSignInWithPassword(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: signInWithPassword,
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
