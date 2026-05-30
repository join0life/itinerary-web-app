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
      <PopoverTrigger className="avatar-trigger">
        <img
          src={profile?.avatar_url || dog}
          className="avatar-sm cursor-pointer"
          alt="프로필 이미지"
        />
      </PopoverTrigger>
      <PopoverContent className="popover-menu">
        <PopoverClose asChild>
          <Link to={`/profile/${session.user.id}`}>
            <div className="popover-menu-item">프로필</div>
          </Link>
        </PopoverClose>
        <PopoverClose asChild>
          <div onClick={handleLogoutClick} className="popover-menu-item">
            로그아웃
          </div>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
}
