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
    <header className="flex h-15 border-b">
      <div className="m-auto flex h-full w-full items-center justify-between px-4">
        <div className="flex w-full items-center gap-1">
          <div onClick={() => navigate(-1)}>
            <ChevronLeftIcon className="text-muted-foreground cursor-pointer hover:font-black" />
          </div>
          <div className="text-brand-strong line-clamp-1 text-base font-bold">
            {project?.name}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <ThemeButton />
          <ProfileEnterButton />
        </div>
      </div>
    </header>
  );
}
