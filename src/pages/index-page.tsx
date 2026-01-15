import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <section className="w-full">
        <div className="flex min-h-dvh w-full flex-col items-center justify-center gap-5 bg-orange-400">
          <h3 className="text-3xl text-white">여행을 단순하게</h3>
          <h1 className="text-6xl text-white">단순여행</h1>
          <Link to={"/project"}>
            <Button variant={"outline"}>시작하기</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
