import { useOpenCreateTodoModal } from "@/store/todo-editor-modal";
import { PlusCircleIcon } from "lucide-react";

export default function CreateTodoButton() {
  const openTodoEditorModal = useOpenCreateTodoModal();

  return (
    <button
      type="button"
      onClick={openTodoEditorModal}
      className="create-todo-trigger"
    >
      <div>어떤 일정을 만들까요?</div>
      <div>
        <PlusCircleIcon className="icon-md" />
      </div>
    </button>
  );
}
