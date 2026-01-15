import { useOpenEditTodoModal } from "@/store/todo-editor-modal";
import { Button } from "../ui/button";
import type { EventEntity } from "@/types";

export default function UpdateTodoButton(props: EventEntity) {
  const openTodoEditorModal = useOpenEditTodoModal();

  const handleButtonClick = () => {
    openTodoEditorModal({
      projectId: props.project_id,
      id: props.id,
      title: props.title,
      allday: props.allday,
      startAt: props.start_at,
      endAt: props.end_at,
      location: props.location,
      memo: props.memo,
      isConfirmed: props.is_confirmed,
    });
  };
  return (
    <Button
      onClick={handleButtonClick}
      className="cursor-pointer px-3 py-1 text-xs"
      variant={"outline"}
    >
      수정
    </Button>
  );
}
