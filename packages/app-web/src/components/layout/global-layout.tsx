import { Outlet, useLocation, useMatch, useParams } from "react-router";
import BottomNavigationBar from "./bottom-navigation-bar";
import GlobalHeader from "./header/global-header";
import ProjectHeader from "./header/project-header";
import { DialogOverlay } from "@radix-ui/react-dialog";

export default function GlobalLayout() {
  const location = useLocation();
  const isIndexPage = location.pathname === "/";
  const isTodoPage = !!useMatch("/project/:projectId/todo");
  const isCalendarPage = !!useMatch("/project/:projectId/calendar");

  const isProjectHeaderPage = isTodoPage || isCalendarPage;

  return (
    <div>
      <div className="max-w-app-shell m-auto flex min-h-dvh flex-col shadow-xl">
        {!isProjectHeaderPage ? <GlobalHeader /> : <ProjectHeader />}
        {!isIndexPage ? (
          <div className="m-auto h-full w-full flex-1 px-4 py-6">
            <Outlet />
          </div>
        ) : (
          <div className="m-auto h-full w-full flex-1">
            <Outlet />
          </div>
        )}

        {isIndexPage && (
          <footer className="text-muted-foreground border-t py-10 text-center">
            @join0life
          </footer>
        )}

        <BottomNavigationBar />
      </div>
    </div>
  );
}
