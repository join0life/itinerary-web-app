import CreateProjectButton from "@/components/project/create-project-button";
import ProjectFeed from "@/components/project/project-feed";
import SearchProject from "@/components/project/search-project";
import { useEffect } from "react";

export default function ProjectPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="relative flex w-full flex-col gap-[var(--spacing-semantic-item-gap)]">
      <SearchProject />
      <ProjectFeed />
      <CreateProjectButton />
    </div>
  );
}
