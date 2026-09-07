/** Centred profile block: 120px round avatar, nickname, bio, optional edit action. */
export interface ProfileSummaryProps {
  avatarSrc?: string;
  nickname: string;
  bio?: string;
  /** shows 프로필 수정 when this is the signed-in user */
  editable?: boolean;
  onEdit?: () => void;
}
export declare function ProfileSummary(props: ProfileSummaryProps): JSX.Element;
