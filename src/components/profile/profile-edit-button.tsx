import { useOpenProfileEditorModal } from "@/store/profile-editor-modal";
import { Button } from "../ui/button";

export default function ProfileEditButton() {
  const openProfileEditorModal = useOpenProfileEditorModal();

  return (
    <Button
      onClick={openProfileEditorModal}
      variant={"secondary"}
      className="w-fit cursor-pointer"
    >
      프로필 수정
    </Button>
  );
}
