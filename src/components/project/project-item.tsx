import { useProjectByIdData } from "@/hooks/queries/use-project-by-id-data";
import Loader from "../loader";
import Fallback from "../fallback";
import DeleteProjectButton from "./delete-project-button";
import ProjectJoinButton from "./project-join-button";
import { useSession } from "@/store/session";

export default function ProjectItem({
  projectId,
  showDelete,
}: {
  projectId: number;
  showDelete: boolean;
}) {
  const { data: project, isPending, error } = useProjectByIdData({ projectId });
  const session = useSession();

  if (isPending) return <Loader />;
  if (error) return <Fallback />;
  if (!project) return null;

  const isProjectOwner = project?.owner.id === session?.user.id;
  const isProjectMember = project?.members.some(
    (member) => member.user_id === session?.user.id,
  );

  const isJoined = isProjectOwner || isProjectMember;

  return (
    <div className="project-item-card">
      <div className="flex items-center justify-between">
        <div className="card-title-text truncate">{project.name}</div>
        <div className="flex shrink-0 items-center justify-between">
          {!showDelete && (
            <ProjectJoinButton projectId={projectId} isJoined={isJoined} />
          )}
          {showDelete && <DeleteProjectButton id={project.id} />}
        </div>
      </div>

      <div>
        <div className="line-clamp-1 text-[var(--component-project-item-description-text)]">
          {project.description}
        </div>
      </div>
      <div className="project-owner-badge">{project.owner.nickname}</div>
    </div>
  );
}
