import { useNavigate, useParams } from "react-router";
import ThemeButton from "./theme-button";
import { ChevronLeftIcon } from "lucide-react";
import { useProjectByIdData } from "@/hooks/queries/use-project-by-id-data";
import ProfileEnterButton from "./profile-enter-button";

export default function ProjectHeader() {
  const navigate = useNavigate();

  const params = useParams();
  const projectId = params.projectId;

  const { data: project } = useProjectByIdData({
    projectId: Number(projectId),
  });

  return (
    <header className="flex h-[var(--size-header-height)] border-b">
      <div className="m-auto flex h-full w-full items-center justify-between px-page-x">
        <div className="flex w-full items-center gap-[var(--spacing-1)]">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="cursor-pointer rounded-[var(--component-button-radius)] p-[var(--spacing-1)] text-muted-foreground outline-none hover:bg-[var(--component-button-ghost-bg-hover)] focus-visible:shadow-[var(--component-button-focus-ring)]"
            aria-label="이전 페이지로 이동"
          >
            <ChevronLeftIcon className="size-[var(--size-icon-md)]" />
          </button>
          <div className="line-clamp-1 text-[length:var(--font-size-md)] font-[var(--font-weight-bold)] text-primary">
            {project?.name}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-[var(--spacing-3)]">
          <ThemeButton />
          <ProfileEnterButton />
        </div>
      </div>
    </header>
  );
}
