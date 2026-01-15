import CreateTodoButton from "@/components/todo/create-todo-button";
import TodoList from "@/components/todo/todo-list";
import {
  useRecentProjectId,
  useRecentProjectIdActions,
} from "@/store/recent-project-id";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router";

export default function TodoPage() {
  const params = useParams();
  const paramProjectId = params.projectId ? Number(params.projectId) : null;

  const setRecentProjectId = useRecentProjectIdActions();
  const recentProjectId = useRecentProjectId();
  const projectId = paramProjectId ?? recentProjectId;

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  if (!projectId) return <Navigate to="/project" replace />;

  useEffect(() => {
    if (projectId) {
      setRecentProjectId(projectId);
    }
  }, [projectId, setRecentProjectId]);

  return (
    <div className="flex w-full flex-col gap-5">
      <CreateTodoButton />
      <TodoList projectId={Number(projectId)} />
    </div>
  );
}
