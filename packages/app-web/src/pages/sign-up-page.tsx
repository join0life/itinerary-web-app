import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignUp } from "@/hooks/mutations/use-sign-up";
import { generateErrorMessage } from "@itinerary/shared";
import { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: signUp, isPending: isSignUpPending } = useSignUp({
    onError: (error) => {
      toast.error(generateErrorMessage(error), {
        position: "top-center",
      });
      setEmail("");
      setPassword("");
    },
  });

  const handleSignUpClick = () => {
    if (email.trim() === "") return;
    if (password.trim() === "") return;

    signUp({ email, password });
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="text-xl font-bold">회원가입</div>
      <div>
        <Input
          type="email"
          placeholder="Email"
          className="mb-2 px-4 py-6"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSignUpPending}
        ></Input>
        <Input
          type="password"
          placeholder="Password"
          className="px-4 py-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isSignUpPending}
        ></Input>
      </div>
      <Button onClick={handleSignUpClick} disabled={isSignUpPending}>
        회원가입
      </Button>
      <Link to={"/sign-in"}>
        <div className="text-muted-foreground cursor-pointer hover:underline">
          이미 계정이 있다면? 로그인
        </div>
      </Link>
    </div>
  );
}
