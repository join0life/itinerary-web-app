import { Button } from "@/components/ui/button";
import { useOpenProjectEditorModal } from "@/store/project-editor-modal";
import { PlusCircleIcon } from "lucide-react";

export default function CreateProjectButton() {
  const openProjectEditorModal = useOpenProjectEditorModal();

  return (
    <Button
      onClick={openProjectEditorModal}
      className="floating-create-button"
    >
      <PlusCircleIcon />새 프로젝트 추가
    </Button>
  );
}
