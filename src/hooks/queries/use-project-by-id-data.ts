import { fetchProjectById } from "@/api/project";
import { QUERY_KEYS } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export function useProjectByIdData({ projectId }: { projectId: number  }) {
  return useQuery({
    queryKey: QUERY_KEYS.project.byId(projectId),
    queryFn: () => fetchProjectById(projectId),
  });
}
