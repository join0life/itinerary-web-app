import { useProjectByIdData } from "@/hooks/queries/use-project-by-id-data";
import Loader from "../loader";
import Fallback from "../fallback";
import DeleteProjectButton from "./delete-project-button";
import ProjectJoinButton from "./project-join-button";
import { useProjectId } from "@/store/project-join-modal";
import { useSession } from "@/store/session";

export default function ProjectItem({ showDelete }: { showDelete: boolean }) {
  const projectId = useProjectId();

  if (!projectId) return null;

  const { data: project, isPending, error } = useProjectByIdData({ projectId });
  const session = useSession();

  const isProjectOwner = project?.owner.id === session?.user.id;
  const isProjectMember = project?.members.some(
    (member) => member.user_id === session?.user.id,
  );

  const isJoined = isProjectOwner || isProjectMember;

  if (!isJoined) return null;

  if (isPending) return <Loader />;
  if (error) return <Fallback />;

  return (
    <div className="w-fll bg-muted flex h-40 cursor-pointer flex-col gap-3 rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div className="truncate text-lg font-semibold">{project.name}</div>
        <div className="flex shrink-0 items-center justify-between">
          {!showDelete && (
            <ProjectJoinButton projectId={projectId} isJoined={isJoined} />
          )}
          {showDelete && <DeleteProjectButton id={project.id} />}
        </div>
      </div>

      <div>
        <div className="line-clamp-1 text-sm">{project.description}</div>
      </div>
      <div className="w-fit truncate rounded-sm border px-1 py-0.5 text-xs">
        {project.owner.nickname}
      </div>
    </div>
  );
}
