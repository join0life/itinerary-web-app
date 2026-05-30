import { Link } from "react-router";
import dog from "@/assets/dog-yellow.png";
import { useSession } from "@/store/session";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { signOut } from "@/api/auth";
import { useResetRecentProjectId } from "@/store/recent-project-id";
import { useProfileData } from "@/hooks/queries/use-profile-data";

export default function ProfileEnterButton() {
  const session = useSession();
  const { data: profile } = useProfileData(session?.user.id);

  const resetRecentProjectId = useResetRecentProjectId();

  const handleLogoutClick = async () => {
    resetRecentProjectId();
    await signOut();
  };

  if (!session) return null;
  return (
    <Popover>
      <PopoverTrigger className="rounded-[var(--radius-full)] outline-none focus-visible:shadow-[var(--component-button-focus-ring)]">
        <img
          src={profile?.avatar_url || dog}
          className="size-[var(--size-icon-lg)] cursor-pointer rounded-[var(--radius-full)] object-cover"
          alt="프로필 이미지"
        />
      </PopoverTrigger>
      <PopoverContent className="flex w-[var(--size-40)] flex-col p-[var(--spacing-0)]">
        <PopoverClose asChild>
          <Link to={`/profile/${session.user.id}`}>
            <div className="cursor-pointer px-[var(--spacing-4)] py-[var(--spacing-3)] text-[length:var(--font-size-sm)] hover:bg-muted">
              프로필
            </div>
          </Link>
        </PopoverClose>
        <PopoverClose asChild>
          <div
            onClick={handleLogoutClick}
            className="cursor-pointer px-[var(--spacing-4)] py-[var(--spacing-3)] text-[length:var(--font-size-sm)] hover:bg-muted"
          >
            로그아웃
          </div>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
}
