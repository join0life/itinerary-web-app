import ProfileInfo from "@/components/profile/profile-info";
import ProjectFeed from "@/components/project/project-feed";
import { Button } from "@/components/ui/button";
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
    <div className="flex flex-col gap-10">
      <ProfileInfo userId={userId} />
      <div className="border-b"></div>
      <div className="flex flex-col gap-3">
        <div className="text-xl font-semibold">내 프로젝트</div>
        <ProjectFeed ownerId={userId} />
      </div>
    </div>
  );
}
