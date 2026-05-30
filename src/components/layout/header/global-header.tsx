import { Link } from "react-router";
import ThemeButton from "./theme-button";
import ProfileEnterButton from "./profile-enter-button";

export default function GlobalHeader() {
  return (
    <header className="flex h-[var(--size-header-height)] border-b">
      <div className="m-auto flex h-full w-full items-center justify-between px-page-x">
        <Link to={"/"}>
          {/** @TODO 텍스트 -> 로고 이미지로 대체 */}
          <div className="text-[length:var(--font-size-lg)] font-[var(--font-weight-bold)]">
            단순여행
          </div>
        </Link>
        <div className="flex items-center gap-[var(--spacing-3)]">
          <ThemeButton />
          {/** @TODO defaultAvatar -> 다른 이미지로 대체 */}
          <ProfileEnterButton />
        </div>
      </div>
    </header>
  );
}
