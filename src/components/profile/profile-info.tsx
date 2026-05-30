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
    <div className="flex flex-col items-center justify-center gap-[var(--spacing-5)]">
      <img
        src={profile.avatar_url || dog}
        alt="프로필 이미지"
        className="size-[calc(var(--size-15)*2)] rounded-[var(--radius-full)] object-cover"
      />
      <div className="flex flex-col items-center gap-[var(--spacing-2)]">
        <div className="text-[length:var(--font-size-xl)] font-[var(--font-weight-bold)]">
          {profile.nickname}
        </div>
        <div className="text-muted-foreground">{profile.bio}</div>
      </div>
      {isMine && <ProfileEditButton />}
    </div>
  );
}
