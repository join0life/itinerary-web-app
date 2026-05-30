import { Outlet, useLocation, useMatch } from "react-router";
import BottomNavigationBar from "./bottom-navigation-bar";
import GlobalHeader from "./header/global-header";
import ProjectHeader from "./header/project-header";

export default function GlobalLayout() {
  const location = useLocation();
  const isIndexPage = location.pathname === "/";
  const isTodoPage = !!useMatch("/project/:projectId/todo");
  const isCalendarPage = !!useMatch("/project/:projectId/calendar");

  const isProjectHeaderPage = isTodoPage || isCalendarPage;

  return (
    <div>
      <div className="m-auto flex min-h-dvh max-w-[var(--size-app-shell-width)] flex-col shadow-app-shell">
        {!isProjectHeaderPage ? <GlobalHeader /> : <ProjectHeader />}
        {!isIndexPage ? (
          <div className="m-auto h-full w-full flex-1 px-page-x py-page-y">
            <Outlet />
          </div>
        ) : (
          <div className="m-auto h-full w-full flex-1">
            <Outlet />
          </div>
        )}

        {isIndexPage && (
          <footer className="border-t py-[var(--spacing-10)] text-center text-muted-foreground">
            @join0life
          </footer>
        )}

        <BottomNavigationBar />
      </div>
    </div>
  );
}
