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
    <div className="flex h-[var(--component-project-item-height)] w-full cursor-pointer flex-col gap-[var(--spacing-3)] rounded-[var(--component-project-item-radius)] bg-[var(--component-project-item-bg)] p-[var(--component-project-item-padding)] transition-colors hover:bg-[var(--component-project-item-bg-hover)]">
      <div className="flex items-center justify-between">
        <div className="truncate text-[length:var(--font-size-lg)] font-[var(--font-weight-semibold)] leading-[var(--line-height-tight)]">
          {project.name}
        </div>
        <div className="flex shrink-0 items-center justify-between">
          {!showDelete && (
            <ProjectJoinButton projectId={projectId} isJoined={isJoined} />
          )}
          {showDelete && <DeleteProjectButton id={project.id} />}
        </div>
      </div>

      <div>
        <div className="line-clamp-1 text-[length:var(--font-size-sm)] text-[var(--component-project-item-description-text)]">
          {project.description}
        </div>
      </div>
      <div className="w-fit truncate rounded-[var(--component-project-item-owner-badge-radius)] border border-[var(--component-project-item-owner-badge-border)] bg-[var(--component-project-item-owner-badge-bg)] px-[var(--spacing-1)] py-[calc(var(--spacing-1)/2)] text-[length:var(--font-size-xs)]">
        {project.owner.nickname}
      </div>
    </div>
  );
}
