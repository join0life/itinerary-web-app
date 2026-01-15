import { fetchConfirmedEvent } from "@/api/calendar";
import { QUERY_KEYS } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export function useConfirmedEventData(projectId?: number) {
  return useQuery({
    queryKey: QUERY_KEYS.event.confirmed(projectId!),
    queryFn: () => fetchConfirmedEvent(projectId!),
  });
}
