import dog from "@/assets/dog-yellow.png";
import { useProfileData } from "@/hooks/queries/use-profile-data";
import Fallback from "../fallback";
import Loader from "../loader";
import ProfileEditButton from "./profile-edit-button";
import { useSession } from "@/store/session";

export default function ProfileInfo({ userId }: { userId: string }) {
  const session = useSession();
  const isMine = userId === session?.user.id;

  const {
    data: profile,
    error: fetchProfileError,
    isPending: isFetchingProfilePending,
  } = useProfileData(userId);

  if (fetchProfileError) return <Fallback />;
  if (isFetchingProfilePending) return <Loader />;

  return (
    <div className="stack-md items-center justify-center">
      <img
        src={profile.avatar_url || dog}
        alt="프로필 이미지"
        className="avatar-lg"
      />
      <div className="stack-xs items-center">
        <div className="page-title">{profile.nickname}</div>
        <div className="text-muted-foreground">{profile.bio}</div>
      </div>
      {isMine && <ProfileEditButton />}
    </div>
  );
}
