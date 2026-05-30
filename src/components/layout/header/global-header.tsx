import { Link } from "react-router";
import ThemeButton from "./theme-button";
import ProfileEnterButton from "./profile-enter-button";

export default function GlobalHeader() {
  return (
    <header className="app-header">
      <div className="m-auto flex h-full w-full items-center justify-between px-page-x">
        <Link to={"/"}>
          {/** @TODO 텍스트 -> 로고 이미지로 대체 */}
          <div className="text-[length:var(--font-size-lg)] font-[var(--font-weight-bold)]">
            단순여행
          </div>
        </Link>
        <div className="app-header-actions">
          <ThemeButton />
          {/** @TODO defaultAvatar -> 다른 이미지로 대체 */}
          <ProfileEnterButton />
        </div>
      </div>
    </header>
  );
}
