import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRequestPasswordResetEmail } from "@/hooks/mutations/use-request-password-reset-email";
import { generateErrorMessage } from "@/lib/error";
import { useState } from "react";
import { toast } from "sonner";

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState("");

  const {
    mutate: requestPasswordResetEmail,
    isPending: isRequestPasswordResetEmailPending,
  } = useRequestPasswordResetEmail({
    onSuccess: () => {
      (toast.info("인증 메일이 발송되었습니다.", {
        position: "top-center",
      }),
        setEmail(""));
    },
    onError: (error) => {
      (toast.error(generateErrorMessage(error), {
        position: "top-center",
      }),
        setEmail(""));
    },
  });

  const handleSendEmailClick = () => {
    if (email.trim() === "") return;
    requestPasswordResetEmail(email);
  };

  return (
    <div className="flex flex-col gap-[var(--spacing-5)]">
      <div className="text-[length:var(--font-size-xl)] font-[var(--font-weight-bold)]">
        비밀번호를 잊으셨나요?
      </div>
      <div className="text-muted-foreground">
        이메일로 비밀번호를 재설정할 수 있는 인증 링크를 보내드립니다.
      </div>
      <div>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="example@abc.com"
          className="mb-[var(--spacing-2)] h-[var(--size-12)] px-[var(--spacing-4)]"
          disabled={isRequestPasswordResetEmailPending}
        ></Input>
      </div>
      <Button
        onClick={handleSendEmailClick}
        disabled={isRequestPasswordResetEmailPending}
      >
        인증 메일 요청하기
      </Button>
    </div>
  );
}
