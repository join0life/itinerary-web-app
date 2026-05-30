import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <section className="w-full">
        <div className="flex min-h-dvh w-full flex-col items-center justify-center gap-[var(--spacing-5)] bg-primary">
          <h3 className="text-[length:var(--font-size-2xl)] text-primary-foreground">
            여행을 단순하게
          </h3>
          <h1 className="font-[var(--font-weight-bold)] text-[length:calc(var(--font-size-2xl)*2)] text-primary-foreground">
            단순여행
          </h1>
          <Link to={"/project"}>
            <Button variant={"outline"}>시작하기</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
