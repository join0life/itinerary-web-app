import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import googleLogo from "@/assets/google-symbol.png";
import { Link } from "react-router";
import { useSignInWithPassword } from "@/hooks/mutations/use-sign-in-with-password";
import { useState } from "react";
import { useSignInWithOAuth } from "@/hooks/mutations/use-sign-in-with-oauth";
import { toast } from "sonner";
import { generateErrorMessage } from "@/lib/error";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: signInWithPassword, isPending: isSignInWithPasswordPending } =
    useSignInWithPassword({
      onError: (error) => {
        toast.error(generateErrorMessage(error), {
          position: "top-center",
        });
        setPassword("");
      },
    });
  const { mutate: signInWithOAuth, isPending: isSignInWithOAuth } =
    useSignInWithOAuth({
      onError: (error) => {
        toast.error(generateErrorMessage(error), {
          position: "top-center",
        });
      },
    });

  const handleSignInWithPasswordClick = () => {
    if (email.trim() === "") return;
    if (password.trim() === "") return;

    signInWithPassword({ email, password });
  };

  const handleSignInWithGoogleClick = () => {
    signInWithOAuth("google");
  };

  const isPending = isSignInWithPasswordPending || isSignInWithOAuth;

  return (
    <div className="stack-xl">
      <div className="page-title">로그인</div>
      <div>
        <Input
          type="email"
          placeholder="Email"
          className="auth-input-lg auth-input-spaced"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
        ></Input>
        <Input
          type="password"
          placeholder="Password"
          className="auth-input-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        ></Input>
      </div>
      <div className="stack-xs">
        <Button
          className="cursor-pointer"
          onClick={handleSignInWithPasswordClick}
          disabled={isPending}
        >
          로그인
        </Button>
        <Button
          onClick={handleSignInWithGoogleClick}
          variant={"outline"}
          className="cursor-pointer"
          disabled={isPending}
        >
          <img
            src={googleLogo}
            alt="구글 로고"
            className="icon-sm"
          />
          Google 계정으로 로그인
        </Button>
      </div>
      <div className="stack-xs">
        <Link to={"/sign-up"}>
          <div className="text-muted-foreground cursor-pointer hover:underline">
            아직 계정이 없으신가요? 회원가입
          </div>
        </Link>
        <Link to={"/forget-password"}>
          <div className="text-muted-foreground cursor-pointer hover:underline">
            비밀번호를 잊어버렸나요?
          </div>
        </Link>
      </div>
    </div>
  );
}
