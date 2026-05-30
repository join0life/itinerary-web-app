import { fetchProjectById } from "@/api/project";
import { QUERY_KEYS } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export function useProjectByIdData({
  projectId,
}: {
  projectId: number | null;
}) {
  return useQuery({
    queryKey: projectId
      ? QUERY_KEYS.project.byId(projectId)
      : QUERY_KEYS.project.byId(0),
    queryFn: () => {
      if (!projectId) throw new Error("projectId is required");
      return fetchProjectById(projectId);
    },
    enabled: !!projectId,
  });
}
