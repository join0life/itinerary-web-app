import { create } from "zustand";
import { devtools, combine, persist } from "zustand/middleware";

type State = {
  recentProjectId: number | null;
};

const initialState: State = {
  recentProjectId: null,
};

const useRecentProjectIdStore = create(
  devtools(
    persist(
      combine(initialState, (set) => ({
        actions: {
          setRecentProjectId: (recentProjectId: number) => {
            set({ recentProjectId });
          },
          reset: () => {
            set(initialState);
          },
        },
      })),
      {
        name: "RecentProjectIdStore",
        partialize: (store) => ({
          recentProjectId: store.recentProjectId,
        }),
      },
    ),
    {
      name: "RecentProjectIdStore",
    },
  ),
);

export const useRecentProjectId = () => {
  const recentProjectId = useRecentProjectIdStore(
    (store) => store.recentProjectId,
  );
  return recentProjectId;
};

export const useRecentProjectIdActions = () => {
  const setRecentProjectId = useRecentProjectIdStore(
    (store) => store.actions.setRecentProjectId,
  );
  return setRecentProjectId;
};

export const useResetRecentProjectId = () => {
  const resetRecentProjectId = useRecentProjectIdStore(
    (store) => store.actions.reset,
  );
  return resetRecentProjectId
};
