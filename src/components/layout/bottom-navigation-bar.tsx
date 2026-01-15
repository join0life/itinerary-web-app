import { useRecentProjectId } from "@/store/recent-project-id";
import { Calendar, Folder, Home, ListTodo } from "lucide-react";
import { NavLink, useMatch } from "react-router";

export default function BottomNavigationBar() {
  const recentProjectId = useRecentProjectId();
  const isCalendarPage = !!useMatch("/project/:projectId/calendar");

  return (
    <nav
      className={`text-muted-foreground sticky bottom-0 flex h-15 w-full items-center justify-center border-t bg-white px-1 py-2 text-xs dark:bg-[oklch(0.145_0_0)] ${isCalendarPage ? "z-30" : ""}`}
    >
      <NavItem to={"/"}>
        <Home className="m-auto w-5" />
        <div>소개</div>
      </NavItem>

      <NavItem to={"/project"} end>
        <Folder className="m-auto w-5" />
        <div>프로젝트</div>
      </NavItem>

      <NavItem to={`/project/${recentProjectId}/todo`}>
        <ListTodo className="m-auto w-5" />
        <div>일정</div>
      </NavItem>

      <NavItem to={`/project/${recentProjectId}/calendar`}>
        <Calendar className="m-auto w-5" />
        <div>캘린더</div>
      </NavItem>
    </nav>
  );
}

function NavItem({
  to,
  children,
  end,
}: {
  to: string;
  children: React.ReactNode;
  end?: boolean;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-0.5">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "text-black dark:text-white" : ""
        }
        end={end}
      >
        {children}
      </NavLink>
    </div>
  );
}
