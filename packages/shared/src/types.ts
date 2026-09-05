import { type Database } from "./database.types";

export type ProfileEntity = Database["public"]["Tables"]["profile"]["Row"];
export type ProjectEntity = Database["public"]["Tables"]["project"]["Row"];
export type EventEntity = Database["public"]["Tables"]["event"]["Row"];
export type ProjectMembersEntity =
  Database["public"]["Tables"]["project_members"]["Row"];

export type Project = ProjectEntity & { owner: ProfileEntity };
export type Event = EventEntity & { owner: ProfileEntity };
export type ProjectMembers = Project & { members: ProjectMembersEntity };

export type Theme = "system" | "light" | "dark";

export type UseMutationCallback = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  onMutate?: () => void;
  onSettled?: () => void;
};

export type CalendarPickerProps = {
  value: Date | undefined;
  onChange?: (date: Date) => void;
  id: string;
  isAlldayTrue: boolean;
};

export type GroupedByUser = {
  owner: Event["owner"];
  events: Event[];
};

export type EventPayload = {
  projectId?: number | undefined;
  title: string;
  allday: boolean;
  startAt: Date | undefined;
  endAt: Date | undefined;
  location: string;
  memo: string;
};

export type EventItemWithConfirmButton = {
  id: number;
  projectId: number;
  title: string;
  isConfirmed: boolean;
};

export type CalendarEvent = {
  id: number;
  created_at?: Date;
  title: string;
  allday: boolean;
  startAt?: Date;
  endAt?: Date;
  projectId?: number;
  location?: string;
  memo?: string;
  isConfirmed?: boolean;
};
