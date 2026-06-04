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

  const handleProjectJoinClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (isJoined) {
      navigate(`/project/${projectId}/todo`);
    } else {
      openJoinModal(projectId!);
    }
  };

  const label = isJoined ? "입장하기" : "참여하기";

  return (
    <Button
      className="shrink-0"
      onClick={handleProjectJoinClick}
      variant="mutedGhost"
    >
      {label}
    </Button>
  );
}
