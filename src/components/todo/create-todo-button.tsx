import { useOpenCreateTodoModal } from "@/store/todo-editor-modal";
import { PlusCircleIcon } from "lucide-react";

export default function CreateTodoButton() {
  const openTodoEditorModal = useOpenCreateTodoModal();

  return (
    <button
      type="button"
      onClick={openTodoEditorModal}
      className="flex w-full cursor-pointer items-center justify-between rounded-[var(--component-card-radius)] bg-muted px-[var(--spacing-4)] py-[var(--spacing-4)] text-[var(--muted-foreground)] outline-none transition-colors hover:bg-[var(--component-card-interactive-bg-hover)] focus-visible:shadow-[var(--component-button-focus-ring)]"
    >
      <div>어떤 일정을 만들까요?</div>
      <div>
        <PlusCircleIcon className="size-[var(--size-icon-md)]" />
      </div>
    </button>
  );
}
