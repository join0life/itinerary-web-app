import { DialogDescription } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useProjectId, useProjectJoinModal } from "@/store/project-join-modal";
import { useState } from "react";
import { useJoinProject } from "@/hooks/mutations/project/use-join-project";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export default function ProjectJoinModal() {
  const { isOpen, close } = useProjectJoinModal();
  const [password, setPassword] = useState("");
  const projectId = useProjectId();
  const navigate = useNavigate();

  const { mutate: joinProject, isPending: isJoinProjectPending } =
    useJoinProject({
      onSuccess: () => {
        close();
        if (projectId) {
          navigate(`/project/${projectId}/todo`);
        }
      },
      onError: (error) => {
        toast.error("입장에 실패했습니다. 비밀번호를 다시 입력해주세요.", {
          position: "top-center",
        });
      },
    });

  if (!projectId) return null;

  const handleValidatePasswordClick = () => {
    if (password.trim() === "") return;

    joinProject({
      projectId,
      projectPassword: password,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogTitle>비밀번호 입력</DialogTitle>
        <DialogDescription>
          프로젝트에 참여하려면 비밀번호를 입력하세요
        </DialogDescription>
        <div>
          <Input
            disabled={isJoinProjectPending}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          disabled={isJoinProjectPending}
          onClick={handleValidatePasswordClick}
        >
          확인
        </Button>
      </DialogContent>
    </Dialog>
  );
}
