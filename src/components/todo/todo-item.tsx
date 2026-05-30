import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { useUpdateEvent } from "@/hooks/mutations/event/use-update-event";
import DeleteTodoButton from "./delete-todo-button";
import UpdateTodoButton from "./update-todo-button";
import type { EventEntity } from "@/types";
import { useSession } from "@/store/session";

export default function TodoItem(props: EventEntity) {
  const session = useSession();
  const { mutate: updateEvent } = useUpdateEvent();
  const isOwner = props.user_id === session?.user.id;

  const handleCheckboxClick = () => {
    if (!isOwner) return;

    updateEvent({
      id: props.id,
      is_confirmed: !props.is_confirmed,
      project_id: props.project_id,
    });
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-[var(--component-todo-item-gap)]">
        <Checkbox
          id={`${props.title}-${props.id}`}
          checked={props.is_confirmed}
          disabled={!isOwner}
          onCheckedChange={handleCheckboxClick}
        />
        <Label
          htmlFor={props.title}
          className="font-[var(--font-weight-regular)] text-[var(--component-todo-item-text)]"
        >
          {props.title}
        </Label>
      </div>
      <div className="flex gap-[var(--component-todo-item-gap)]">
        <UpdateTodoButton {...props} disabled={!isOwner} />
        <DeleteTodoButton id={props.id} disabled={!isOwner} />
      </div>
    </div>
  );
}
