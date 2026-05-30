import { useNavigate } from "react-router";
import { Button } from "../ui/button";
import { useOpenProjectJoinModal } from "@/store/project-join-modal";

export default function ProjectJoinButton({
  projectId,
  isJoined,
}: {
  projectId: number;
  isJoined: boolean;
}) {
  const openJoinModal = useOpenProjectJoinModal();
  const navigate = useNavigate();

  const handleProjectJoinClick = () => {
    if (isJoined) {
      navigate(`/project/${projectId}/todo`);
    } else {
      openJoinModal(projectId!);
    }
  };

  const label = isJoined ? "입장하기" : "참여하기";

  return (
    <Button
      className="shrink-0 cursor-pointer text-[length:var(--font-size-sm)] text-[var(--component-button-ghost-text)]"
      onClick={handleProjectJoinClick}
      variant={"ghost"}
    >
      {label}
    </Button>
  );
}
