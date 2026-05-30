import { Button } from "@/components/ui/button";
import { useOpenProjectEditorModal } from "@/store/project-editor-modal";
import { PlusCircleIcon } from "lucide-react";

export default function CreateProjectButton() {
  const openProjectEditorModal = useOpenProjectEditorModal();

  return (
    <Button
      onClick={openProjectEditorModal}
      className="fixed bottom-[calc(var(--component-bottom-nav-height)+var(--spacing-5))] left-1/2 z-50 h-[var(--size-button-lg-height)] w-[calc(100%-(var(--spacing-4)*2))] max-w-[var(--size-floating-action-max-width)] -translate-x-1/2 px-[var(--component-button-padding-x-lg)] text-[length:var(--font-size-md)]"
    >
      <PlusCircleIcon />새 프로젝트 추가
    </Button>
  );
}
