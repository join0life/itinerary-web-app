import { Routes, Route, Navigate, useParams } from "react-router";
import IndexPage from "@/pages/index-page";
import GlobalLayout from "@/components/layout/global-layout";
import TodoPage from "@/pages/todo-page";
import CalendarPage from "@/pages/calendar-page";
import SignUpPage from "@/pages/sign-up-page";
import SignInPage from "@/pages/sign-in-page";
import ResetPasswordPage from "@/pages/reset-password-page";
import ProfileDetailPage from "@/pages/profile-detail-page";
import GuestOnlyLayout from "@/components/layout/guest-only-layout";
import MemberOnlyLayout from "@/components/layout/member-only-layout";
import ForgetPasswordPage from "@/pages/forget-password-page";
import ProjectsLayout from "@/components/layout/projects-layout";
import ProjectPage from "./pages/project-page";

export default function RootRoute() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        {/* 모든 사용자 */}
        <Route path="/" element={<IndexPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />

        {/* 로그인 하지 않은 사용자 */}
        <Route element={<GuestOnlyLayout />}>
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
        </Route>

        {/** @TODO 로그인한 사용자 */}
        <Route element={<MemberOnlyLayout />}>
          <Route path="/project" element={<ProjectPage />} />

          <Route path="/project/:projectId" element={<ProjectsLayout />}>
            <Route index element={<TodoPage />} />
            <Route path="todo" element={<TodoPage />} />
            <Route path="calendar" element={<CalendarPage />} />
          </Route>

          <Route path="/profile/:userId" element={<ProfileDetailPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
