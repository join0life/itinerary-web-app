import { useRecentProjectId } from "@/store/recent-project-id";
import { Calendar, Folder, Home, ListTodo } from "lucide-react";
import { NavLink, useMatch } from "react-router";

export default function BottomNavigationBar() {
  const recentProjectId = useRecentProjectId();
  const isCalendarPage = !!useMatch("/project/:projectId/calendar");

  return (
    <nav
      className={`sticky bottom-0 flex h-[var(--component-bottom-nav-height)] w-full items-center justify-center border-t border-[var(--component-bottom-nav-border)] bg-[var(--component-bottom-nav-bg)] px-[var(--spacing-1)] py-[var(--spacing-2)] text-[length:var(--font-size-xs)] text-[var(--component-bottom-nav-text)] ${isCalendarPage ? "z-30" : ""}`}
    >
      <NavItem to={"/"}>
        <Home className="m-auto size-[var(--component-bottom-nav-icon-size)]" />
        <div>소개</div>
      </NavItem>

      <NavItem to={"/project"} end>
        <Folder className="m-auto size-[var(--component-bottom-nav-icon-size)]" />
        <div>프로젝트</div>
      </NavItem>

      <NavItem to={`/project/${recentProjectId}/todo`}>
        <ListTodo className="m-auto size-[var(--component-bottom-nav-icon-size)]" />
        <div>일정</div>
      </NavItem>

      <NavItem to={`/project/${recentProjectId}/calendar`}>
        <Calendar className="m-auto size-[var(--component-bottom-nav-icon-size)]" />
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
    <div className="flex w-full flex-col items-center justify-center gap-[var(--spacing-1)]">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `rounded-[var(--ds-radius-sm)] focus-visible:shadow-[var(--component-button-focus-ring)] focus-visible:outline-none ${
            isActive ? "text-[var(--component-bottom-nav-text-active)]" : ""
          }`
        }
        end={end}
      >
        {children}
      </NavLink>
    </div>
  );
}
