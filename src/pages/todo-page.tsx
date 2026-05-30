import CreateTodoButton from "@/components/todo/create-todo-button";
import TodoList from "@/components/todo/todo-list";
import Loader from "@/components/loader";
import Fallback from "@/components/fallback";
import { useProjectByIdData } from "@/hooks/queries/use-project-by-id-data";
import {
  useRecentProjectId,
  useRecentProjectIdActions,
} from "@/store/recent-project-id";
import { useSession } from "@/store/session";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router";

export default function TodoPage() {
  const params = useParams();
  const paramProjectId = params.projectId ? Number(params.projectId) : null;

  const setRecentProjectId = useRecentProjectIdActions();
  const recentProjectId = useRecentProjectId();
  const projectId = paramProjectId ?? recentProjectId;
  const session = useSession();
  const { data: project, isPending, error } = useProjectByIdData({ projectId });

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  useEffect(() => {
    if (projectId) {
      setRecentProjectId(projectId);
    }
  }, [projectId, setRecentProjectId]);

  if (!projectId) return <Navigate to="/project" replace />;
  if (isPending) return <Loader />;
  if (error) return <Fallback />;

  const isProjectOwner = project?.owner.id === session?.user.id;
  const isProjectMember = project?.members.some(
    (member) => member.user_id === session?.user.id,
  );

  if (!isProjectOwner && !isProjectMember) {
    return <Navigate to="/project" replace />;
  }

  return (
    <div className="stack-md w-full">
      <CreateTodoButton />
      <TodoList projectId={Number(projectId)} />
    </div>
  );
}
