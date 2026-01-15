import { Link } from "react-router";
import ThemeButton from "./theme-button";
import ProfileEnterButton from "./profile-enter-button";

export default function GlobalHeader() {
  return (
    <header className="flex h-15 border-b">
      <div className="m-auto flex h-full w-full items-center justify-between px-4">
        <Link to={"/"}>
          {/** @TODO 텍스트 -> 로고 이미지로 대체 */}
          <div className="font-lg font-bold">단순여행</div>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeButton />
          {/** @TODO defaultAvatar -> 다른 이미지로 대체 */}
          <ProfileEnterButton />
        </div>
      </div>
    </header>
  );
}
