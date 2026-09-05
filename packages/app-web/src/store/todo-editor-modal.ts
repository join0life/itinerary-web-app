import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

type CreateMode = {
  isOpen: true;
  type: "CREATE";
};

type EditMode = {
  isOpen: true;
  type: "EDIT";
  id: number;
  projectId: number;
  title: string;
  allday: boolean;
  startAt: Date | null;
  endAt: Date | null;
  location: string;
  memo: string;
  isConfirmed: boolean;
};

type ViewMode = {
  isOpen: true;
  type: "VIEW";
  id: number;
  projectId: number;
  title: string;
  allday: boolean;
  startAt: Date | null;
  endAt: Date | null;
  location: string;
  memo: string;
  isConfirmed: boolean;
};

type OpenState = CreateMode | EditMode | ViewMode;

type CloseState = { isOpen: false };

type State = CloseState | OpenState;

const initialState = {
  isOpen: false,
} as State;

const useTodoEditorModalStore = create(
  devtools(
    combine(initialState, (set) => ({
      actions: {
        openCreate: () => {
          set({ isOpen: true, type: "CREATE" });
        },
        openEdit: (param: Omit<EditMode, "isOpen" | "type">) => {
          set({ isOpen: true, type: "EDIT", ...param });
        },
        openView: (param: Omit<EditMode, "isOpen" | "type">) => {
          set({ isOpen: true, type: "VIEW", ...param });
        },
        close: () => {
          set({ isOpen: false });
        },
      },
    })),
    { name: "TodoEditorModalStore" },
  ),
);

export const useOpenCreateTodoModal = () => {
  const openCreate = useTodoEditorModalStore(
    (store) => store.actions.openCreate,
  );
  return openCreate;
};

export const useOpenEditTodoModal = () => {
  const openEdit = useTodoEditorModalStore((store) => store.actions.openEdit);
  return openEdit;
};

export const useOpenViewTodoModal = () => {
  const openView = useTodoEditorModalStore((store) => store.actions.openView);
  return openView;
};

export const useTodoEditorModal = () => {
  const store = useTodoEditorModalStore();
  return store as typeof store & State;
};
