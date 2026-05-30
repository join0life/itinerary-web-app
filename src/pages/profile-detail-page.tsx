import ProfileInfo from "@/components/profile/profile-info";
import ProjectFeed from "@/components/project/project-feed";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router";

export default function ProfileDetailPage() {
  const params = useParams();
  const userId = params.userId;

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  if (!userId) return <Navigate to={"/"} replace />;

  return (
    <div className="stack-xl">
      <ProfileInfo userId={userId} />
      <div className="border-b"></div>
      <div className="stack-sm">
        <div className="section-title">내 프로젝트</div>
        <ProjectFeed ownerId={userId} />
      </div>
    </div>
  );
}
