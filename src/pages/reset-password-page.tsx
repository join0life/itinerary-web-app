import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUpdatePassword } from "@/hooks/mutations/use-update-password";
import { generateErrorMessage } from "@/lib/error";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { mutate: updatePassword, isPending: isUpdatePasswordPending } =
    useUpdatePassword({
      onSuccess: () => {
        toast.info("비밀번호가 성공적으로 변경되었습니다.", {
          position: "top-center",
        });
        navigate("/");
      },
      onError: (error) => {
        toast.error(generateErrorMessage(error), {
          position: "top-center",
        });
        setPassword("");
      },
    });

  const handleUpdatePasswordClick = () => {
    if (password.trim() === "") return "";
    updatePassword(password);
  };

  return (
    <div className="flex flex-col gap-[var(--spacing-5)]">
      <div className="text-[length:var(--font-size-xl)] font-[var(--font-weight-bold)]">
        비밀번호 재설정하기
      </div>
      <div className="text-muted-foreground">새로운 비밀번호를 입력하세요</div>
      <div>
        <Input
          disabled={isUpdatePasswordPending}
          type="password"
          placeholder="Password"
          className="mb-[var(--spacing-2)] h-[var(--size-12)] px-[var(--spacing-4)]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
      </div>
      <Button
        disabled={isUpdatePasswordPending}
        onClick={handleUpdatePasswordClick}
        className="cursor-pointer"
      >
        비밀번호 변경하기
      </Button>
    </div>
  );
}
