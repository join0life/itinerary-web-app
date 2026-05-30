import { useEventsData } from "@/hooks/queries/use-events-data";
import dog from "@/assets/dog-yellow.png";
import type { GroupedByUser } from "@/types";
import Fallback from "../fallback";
import Loader from "../loader";
import EmptyTodo from "../empty-todo";
import TodoItem from "./todo-item";

export default function TodoList({ projectId }: { projectId: number }) {
  const { data, error, isPending } = useEventsData(projectId);

  const groupedByUser = data?.reduce(
    (acc, event) => {
      if (!event.owner) return acc;
      const userId = event.owner.id;

      if (!acc[userId]) {
        acc[userId] = {
          owner: event.owner,
          events: [],
        };
      }

      acc[userId].events.push(event);
      return acc;
    },
    {} as Record<string, GroupedByUser>,
  );

  const grouped = groupedByUser && Object.values(groupedByUser);

  if (error) return <Fallback />;
  if (isPending) return <Loader />;
  if (!grouped || grouped.length === 0) return <EmptyTodo />;

  return (
    <div className="flex flex-col gap-[var(--spacing-8)]">
      {grouped?.map(({ owner, events }) => (
        <div key={owner.id} className="flex flex-col gap-[var(--spacing-5)]">
          <div className="flex items-center gap-[var(--spacing-2)]">
            <img
              className="avatar-sm"
              src={dog}
              alt=""
            ></img>
            <div className="text-[length:var(--font-size-sm)] font-[var(--font-weight-semibold)]">
              {owner.nickname}
            </div>
          </div>

          {events.map((event) => (
            <TodoItem {...event} key={event.id} />
          ))}
        </div>
      ))}
    </div>
  );
}
