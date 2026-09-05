import { Button } from "@/components/ui/button";
import { useOpenProjectEditorModal } from "@/store/project-editor-modal";
import { PlusCircleIcon } from "lucide-react";

export default function CreateProjectButton() {
  const openProjectEditorModal = useOpenProjectEditorModal();

  return (
    <Button
      onClick={openProjectEditorModal}
      variant="brand"
      size="xl"
      className="max-w-project-create fixed bottom-20 left-1/2 z-50 w-[calc(100%-2rem)] -translate-x-1/2"
    >
      <PlusCircleIcon />새 프로젝트 추가
    </Button>
  );
}
