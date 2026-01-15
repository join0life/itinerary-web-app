import supabase from "@/lib/supabase";
import type { EventEntity } from "@/types";

export async function fetchEvents(projectId: number) {
  const { data, error } = await supabase
    .from("event")
    .select("*, owner:profile!user_id (*)")
    .eq("project_id", projectId)
    .order("created_at", { ascending: true });

  if (error) throw error;

  return data;
}

export async function createEvent({
  projectId,
  title,
  allday,
  startAt,
  endAt,
  location,
  memo,
}: {
  projectId: number;
  title: string;
  allday: boolean;
  startAt: string;
  endAt: string;
  location?: string;
  memo?: string;
}) {
  const { data, error } = await supabase.from("event").insert({
    project_id: projectId,
    title: title,
    allday: allday,
    start_at: startAt,
    end_at: endAt,
    location: location,
    memo: memo,
  });

  if (error) throw error;
  return data;
}

export async function updateEvent(
  event: Partial<EventEntity> & { id: number },
) {
  const { data, error } = await supabase
    .from("event")
    .update(event)
    .eq("id", event.id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteEvent(eventId: number) {
  const { data, error } = await supabase
    .from("event")
    .delete()
    .eq("id", eventId)
    .select()
    .single();

  if (error) throw error;
  return data;
}
