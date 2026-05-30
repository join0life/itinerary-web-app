import { LoaderCircleIcon } from "lucide-react";

export default function Loader() {
  return (
    <div className="stack-md items-center justify-center text-muted-foreground">
      <LoaderCircleIcon className="icon-md animate-spin" />
      <div className="caption-text">데이터를 불러오는 중입니다.</div>
    </div>
  );
}
