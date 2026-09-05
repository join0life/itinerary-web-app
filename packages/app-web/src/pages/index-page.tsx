import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <section className="w-full">
        <div className="bg-brand flex min-h-dvh w-full flex-col items-center justify-center gap-5">
          <h3 className="text-brand-foreground text-3xl">여행을 단순하게</h3>
          <h1 className="text-brand-foreground text-6xl">단순여행</h1>
          <Link to={"/project"}>
            <Button variant={"outline"}>시작하기</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
