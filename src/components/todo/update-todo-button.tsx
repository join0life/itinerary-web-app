import { useOpenEditTodoModal } from "@/store/todo-editor-modal";
import { Button } from "../ui/button";
import type { EventEntity } from "@/types";

type UpdateTodoButtonProps = EventEntity & {
  disabled?: boolean;
};

export default function UpdateTodoButton(props: UpdateTodoButtonProps) {
  const openTodoEditorModal = useOpenEditTodoModal();

  const handleButtonClick = () => {
    if (props.disabled) return;

    openTodoEditorModal({
      projectId: props.project_id,
      id: props.id,
      title: props.title,
      allday: props.allday,
      startAt: props.start_at ? new Date(props.start_at) : null,
      endAt: props.end_at ? new Date(props.end_at) : null,
      location: props.location,
      memo: props.memo,
      isConfirmed: props.is_confirmed,
    });
  };
  return (
    <Button
      disabled={props.disabled}
      onClick={handleButtonClick}
      className="todo-action-button"
      variant={"outline"}
    >
      수정
    </Button>
  );
}
