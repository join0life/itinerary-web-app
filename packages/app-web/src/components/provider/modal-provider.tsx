import { createPortal } from "react-dom";
import ProjectEditorModal from "@/components/modal/project-editor-modal";
import type { ReactNode } from "react";
import TodoEditorModal from "@/components/modal/todo-editor-modal";
import ProfileEditorModal from "../modal/profile-editor-modal";
import AlertModal from "../modal/alert-modal";
import ProjectJoinModal from "../modal/project-join-modal";

export default function ModalProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {createPortal(
        <>
          <ProjectEditorModal />
          <TodoEditorModal />
          <ProfileEditorModal />
          <AlertModal />
          <ProjectJoinModal />
        </>,
        document.getElementById("modal-root")!,
      )}
      {children}
    </>
  );
}
