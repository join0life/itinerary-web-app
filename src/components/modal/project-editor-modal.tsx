import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useProjectEditorModal } from "@/store/project-editor-modal";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useCreateProject } from "@/hooks/mutations/project/use-create-project";
import { toast } from "sonner";
import { generateErrorMessage } from "@/lib/error";
import { useOpenAlertModal } from "@/store/use-alert-modal";

export default function ProjectEditorModal() {
  const { isOpen, close } = useProjectEditorModal();
  const openAlertModal = useOpenAlertModal();

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectPassword, setProjectPassword] = useState("");

  const { mutate: createProject, isPending: isCreateProjectPending } =
    useCreateProject({
      onSuccess: () => {
        close();
      },
      onError: (error) => {
        toast.error(generateErrorMessage(error), {
          position: "top-center",
        });
      },
    });

  const handleCreateProjectClick = () => {
    if (projectName.trim() === "") return;
    if (projectPassword.trim() === "") return;

    createProject({ projectName, projectDescription, projectPassword });
  };

  const handleCloseModal = () => {
    if (projectName !== "" || projectPassword !== "") {
      openAlertModal({
        title: "게시글 작성이 마무리되지 않았습니다.",
        description: "이 화면에서 나가면 작성 중이던 내용이 사라집니다.",
        onPositive: () => {
          close();
        },
      });
      return;
    }
    close();
  };

  useEffect(() => {
    if (!isOpen) return;
    setProjectName("");
    setProjectDescription("");
    setProjectPassword("");
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={() => close()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 프로젝트 만들기</DialogTitle>
        </DialogHeader>

        <div className="form-field">
          <Label htmlFor="project-name">프로젝트 이름</Label>
          <Input
            id="project-name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            disabled={isCreateProjectPending}
          ></Input>
        </div>

        <div className="form-field">
          <Label htmlFor="project-description">자세한 설명</Label>
          <Input
            id="project-description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            disabled={isCreateProjectPending}
          ></Input>
        </div>

        <div className="form-field">
          <Label htmlFor="project-password">비밀번호</Label>
          <Input
            id="project-description"
            type="password"
            value={projectPassword}
            onChange={(e) => setProjectPassword(e.target.value)}
            disabled={isCreateProjectPending}
          ></Input>
        </div>

        <div className="form-actions">
          <Button
            className="flex-1"
            variant={"outline"}
            onClick={handleCloseModal}
            disabled={isCreateProjectPending}
          >
            취소
          </Button>
          <Button
            disabled={isCreateProjectPending}
            onClick={handleCreateProjectClick}
            className="flex-1"
          >
            확인
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
