import { fetchEvents } from "@/api/event";
import { QUERY_KEYS } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export function useEventsData(projectId?: number) {
  return useQuery({
    queryKey: QUERY_KEYS.event.listByProject(projectId!),
    queryFn: () => fetchEvents(projectId!),
  });
}
