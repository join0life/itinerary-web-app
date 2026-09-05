import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

const initialState = {
  isOpen: false,
};

const useProfileEditorModalStore = create(
  devtools(
    combine(initialState, (set) => ({
      actions: {
        open: () => {
          set({ isOpen: true });
        },
        close: () => {
          set({ isOpen: false });
        },
      },
    })),
    { name: "ProfileEditorModal" },
  ),
);

export const useOpenProfileEditorModal = () => {
  const open = useProfileEditorModalStore((store) => store.actions.open);
  return open;
};

export const useProfileEditorModal = () => {
  const {
    isOpen,
    actions: { open, close },
  } = useProfileEditorModalStore();
  return { isOpen, open, close };
};
