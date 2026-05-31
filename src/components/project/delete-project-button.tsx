import { useDeleteProject } from "@/hooks/mutations/project/use-delete-project";
import { useOpenAlertModal } from "@/store/use-alert-modal";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { useResetRecentProjectId } from "@/store/recent-project-id";

export default function DeleteProjectButton({ id }: { id: number }) {
  const openAlertModal = useOpenAlertModal();
  const resetRecentProjectId = useResetRecentProjectId();

  const { mutate: deleteProject, isPending: isDeleteProjectPending } =
    useDeleteProject({
      onSuccess: () => {
        toast.success("프로젝트가 삭제되었습니다.", {
          position: "top-center",
        });
      },
      onError: (error) => {
        toast.error("프로젝트 삭제에 실패했습니다.", {
          position: "top-center",
        });
      },
    });

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    openAlertModal({
      title: "프로젝트 삭제",
      description:
        "삭제된 프로젝트는 되돌릴 수 없습니다. 정말 삭제하시겠습니까?",
      onPositive: () => {
        deleteProject(id);
        resetRecentProjectId();
      },
    });
  };
  return (
    <Button
      disabled={isDeleteProjectPending}
      onClick={handleDeleteClick}
      className="text-destructive hover:text-destructive shrink-0 cursor-pointer text-sm"
      variant={"ghost"}
    >
      삭제
    </Button>
  );
}
