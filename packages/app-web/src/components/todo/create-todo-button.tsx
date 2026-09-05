import { useOpenCreateTodoModal } from "@/store/todo-editor-modal";
import { PlusCircleIcon } from "lucide-react";

export default function CreateTodoButton() {
  const openTodoEditorModal = useOpenCreateTodoModal();

  return (
    <div
      onClick={openTodoEditorModal}
      className="bg-muted text-muted-foreground flex cursor-pointer items-center justify-between rounded-xl px-4 py-4"
    >
      <div>어떤 일정을 만들까요?</div>
      <div>
        <PlusCircleIcon />
      </div>
    </div>
  );
}
