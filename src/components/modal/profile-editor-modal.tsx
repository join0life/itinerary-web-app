import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useProfileEditorModal } from "@/store/profile-editor-modal";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import dog from "@/assets/dog-yellow.png";
import { useSession } from "@/store/session";
import { useProfileData } from "@/hooks/queries/use-profile-data";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { useUpdateProfile } from "@/hooks/mutations/profile/use-update-profile";
import { toast } from "sonner";
import Fallback from "../fallback";
import Loader from "../loader";

type Image = { file: File; previewUrl: string };

export default function ProfileEditorModal() {
  const session = useSession();
  const [avatarImage, setAvatarImage] = useState<Image | null>(null);
  const [nickname, setNickname] = useState("");
  const [bio, setBio] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    data: profile,
    error: fetchProfileError,
    isPending: isFetchProfilePending,
  } = useProfileData(session?.user.id);

  const store = useProfileEditorModal();
  const { isOpen, close } = store;

  const { mutate: updateProfile, isPending: isUpdateProfilePending } =
    useUpdateProfile({
      onSuccess: () => {
        close();
      },
      onError: (error) => {
        toast.error("프로필 수정에 실패했습니다.", {
          position: "top-center",
        });
      },
    });
  useEffect(() => {
    if (!isOpen) {
      if (avatarImage) URL.revokeObjectURL(avatarImage.previewUrl);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && profile) {
      setNickname(profile.nickname);
      setBio(profile.bio);
      setAvatarImage(null);
    }
  }, [profile, isOpen]);

  const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    if (avatarImage) {
      URL.revokeObjectURL(avatarImage.previewUrl);
    }

    setAvatarImage({
      file,
      previewUrl: URL.createObjectURL(file),
    });
  };

  const handleUpdateClick = () => {
    if (nickname.trim() === "") return;

    updateProfile({
      userId: session!.user.id,
      nickname,
      bio,
      avatarImageFile: avatarImage?.file,
    });
  };
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogTitle>프로필 수정하기</DialogTitle>
        {fetchProfileError && <Fallback />}
        {isFetchProfilePending && <Loader />}
        {!fetchProfileError && !isFetchProfilePending && (
          <>
            <div className="form-field">
              <Label htmlFor="profile-image">프로필 이미지</Label>
              <Input
                disabled={isUpdateProfilePending}
                onChange={handleSelectImage}
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
              />
              <img
                role="button"
                tabIndex={0}
                onClick={() => {
                  if (fileInputRef.current) fileInputRef.current.click();
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    fileInputRef.current?.click();
                  }
                }}
                src={avatarImage?.previewUrl || profile.avatar_url || dog}
                id="profile-image"
                className="avatar-lg ds-focus-ring cursor-pointer"
                alt="프로필 이미지 미리보기"
              />
            </div>

            <div className="form-field">
              <Label htmlFor="profile-nickname">닉네임</Label>
              <Input
                disabled={isUpdateProfilePending}
                id="profile-nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              ></Input>
            </div>

            <div className="form-field">
              <Label htmlFor="profile-bio">소개</Label>
              <Input
                disabled={isUpdateProfilePending}
                id="profile-bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></Input>
            </div>

            <Button
              onClick={handleUpdateClick}
              disabled={isUpdateProfilePending}
              className="flex-1"
            >
              수정하기
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
