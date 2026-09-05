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
      <PopoverTrigger>
        <img
          src={profile?.avatar_url || dog}
          className="h-6 w-6 cursor-pointer rounded-full object-cover"
          alt="프로필 이미지"
        />
      </PopoverTrigger>
      <PopoverContent className="flex w-40 flex-col p-0">
        <PopoverClose asChild>
          <Link to={`/profile/${session.user.id}`}>
            <div className="hover:bg-muted cursor-pointer px-4 py-3 text-sm">
              프로필
            </div>
          </Link>
        </PopoverClose>
        <PopoverClose asChild>
          <div
            onClick={handleLogoutClick}
            className="hover:bg-muted cursor-pointer px-4 py-3 text-sm"
          >
            로그아웃
          </div>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
}
