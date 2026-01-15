import supabase from "@/lib/supabase";

export async function fetchProjects({
  from,
  to,
  ownerId,
}: {
  from: number;
  to: number;
  ownerId?: string;
}) {
  const request = supabase
    .from("project")
    .select("*, owner:profile!owner_id (*)")
    .order("created_at", { ascending: false })
    .range(from, to);

  if (ownerId) request.eq("owner_id", ownerId);

  const { data, error } = await request;

  if (error) throw error;
  return data;
}

export async function fetchProjectById(projectId: number) {
  const { data, error } = await supabase
    .from("project")
    .select("*, owner:profile!owner_id (*), members:project_members (*)")
    .eq("id", projectId)
    .single();

  if (error) throw error;
  return data;
}

export async function createProject({
  projectName,
  projectDescription,
  projectPassword,
}: {
  projectName: string;
  projectDescription: string;
  projectPassword: string;
}) {
  const { data, error } = await supabase.rpc("create_project", {
    p_name: projectName,
    p_description: projectDescription,
    p_password: projectPassword,
  });

  if (error) throw error;
  return data;
}

export async function joinProject({
  projectId,
  projectPassword,
}: {
  projectId: number;
  projectPassword: string;
}) {
  const { error } = await supabase.rpc("join_project", {
    p_project_id: String(projectId),
    p_password: projectPassword,
  });

  if (error) throw error;
}

export async function deleteProject(projectId: number) {
  const { data, error } = await supabase
    .from("project")
    .delete()
    .eq("id", projectId)
    .select()
    .single();

  if (error) throw error;
  return data;
}
