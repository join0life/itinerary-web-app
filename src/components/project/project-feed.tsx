import ProjectItem from "@/components/project/project-item";
import Fallback from "../fallback";
import Loader from "../loader";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useInfiniteProjectsData } from "@/hooks/queries/use-infinite-projects-data";
import EmptyProject from "../empty-project";

export default function ProjectFeed({ ownerId }: { ownerId?: string }) {
  const { data, error, isPending, fetchNextPage, isFetchingNextPage } =
    useInfiniteProjectsData(ownerId);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (error) return <Fallback />;
  if (isPending) return <Loader />;
  if (!data || data.pages.length === 0) return <EmptyProject />;

  return (
    <div className="flex flex-col gap-3">
      {data?.pages.map((page) =>
        page.map((projectId) => (
          <ProjectItem key={projectId} showDelete={!!ownerId} />
        )),
      )}
      {isFetchingNextPage && <Loader />}
      <div ref={ref} className="m-5"></div>
    </div>
  );
}
