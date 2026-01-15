export const QUERY_KEYS = {
  profile: {
    all: ["profile"],
    list: ["profile", "list"],
    byId: (userId: string) => ["profile", "byId", userId],
  },
  project: {
    all: ["project"],
    list: ["project", "list"],
    userList: (userId: string) => ["project", "userList", userId],
    byId: (projectId: number) => ["project", "byId", projectId],
  },
  event: {
    all: ["event"],
    lists: ["event", "list"],
    listByProject: (projectId: number) => [
      "event",
      "list",
      "byProjectId",
      projectId,
    ],
    listByUser: (userId: string) => ["event", "list", "user", userId],
    byId: (eventId: number) => ["event", "byId", eventId],
    calendarByProject: (projectId: number) => [
      "event",
      "calendar",
      "byProjectId",
      projectId,
    ],
    confirmed: (projectId: number) => [
      "event",
      "byProjectId",
      projectId,
      "confirmed",
    ],
  },
  project_members: {
    all: ["project_members"],
    listByProject: (projectId: number) => [
      "project_members",
      "listByProject",
      projectId,
    ],
  }
};

export const BUCKET_NAME = "uploads";
export const PAGE_SIZE = 5;
export const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
