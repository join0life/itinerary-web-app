import supabase from "@/lib/supabase";

export async function fetchConfirmedEvent(projectId: number) {
  const { data, error } = await supabase
    .from("event")
    .select("*")
    .eq("project_id", projectId)
    .eq("is_confirmed", true);

  if (error) throw error;
  return data;
}
