import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

type State = {
  isOpen: boolean;
  projectId: number | null;
};

const initialState = {
  isOpen: false,
  projectId: null,
} as State;

const useProjectJoinModalStore = create(
  devtools(
    combine(initialState, (set) => ({
      actions: {
        open: (projectId: number) => {
          set({ isOpen: true, projectId });
        },
        close: () => {
          set({ isOpen: false, projectId: null });
        },
      },
    })),
    { name: "ProjectJoinModalStore" },
  ),
);

export const useProjectId = () => {
  const projectId = useProjectJoinModalStore((store) => store.projectId);
  return projectId;
};

export const useOpenProjectJoinModal = () => {
  const open = useProjectJoinModalStore((store) => store.actions.open);
  return open;
};

export const useProjectJoinModal = () => {
  const {
    isOpen,
    projectId,
    actions: { open, close },
  } = useProjectJoinModalStore();
  return { isOpen, projectId, open, close };
};
