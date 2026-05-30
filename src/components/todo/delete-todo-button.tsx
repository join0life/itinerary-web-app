import { useDeleteEvent } from "@/hooks/mutations/event/use-delete-event";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useOpenAlertModal } from "@/store/use-alert-modal";

export default function DeleteTodoButton({
  id,
  disabled = false,
}: {
  id: number;
  disabled?: boolean;
}) {
  const openAlertModal = useOpenAlertModal();

  const { mutate: deleteTodo, isPending: isDeleteTodoPending } = useDeleteEvent(
    {
      onSuccess: () => {
        toast.success("일정이 삭제되었습니다.", {
          position: "top-center",
        });
      },
      onError: (error) => {
        toast.error("일정 삭제에 실패했습니다.", {
          position: "top-center",
        });
      },
    },
  );

  const handleDeleteClick = () => {
    if (disabled) return;

    openAlertModal({
      title: "일정 삭제",
      description: "일정을 삭제하시겠습니까?",
      onPositive: () => {
        deleteTodo(id);
      },
    });
  };

  return (
    <Button
      disabled={disabled || isDeleteTodoPending}
      onClick={handleDeleteClick}
      className="todo-action-button"
      variant={"destructive"}
    >
      삭제
    </Button>
  );
}
