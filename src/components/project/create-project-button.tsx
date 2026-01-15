import { Button } from "@/components/ui/button";
import { useOpenProjectEditorModal } from "@/store/project-editor-modal";
import { PlusCircleIcon } from "lucide-react";

export default function CreateProjectButton() {
  const openProjectEditorModal = useOpenProjectEditorModal();

  return (
    <Button
      onClick={openProjectEditorModal}
      className="fixed bottom-20 left-1/2 z-50 w-[calc(100%-2rem)] max-w-142 -translate-x-1/2 bg-orange-400 px-4 py-6 text-base hover:bg-orange-300"
    >
      <PlusCircleIcon />새 프로젝트 추가
    </Button>
  );
}
