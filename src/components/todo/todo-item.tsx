import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { useUpdateEvent } from "@/hooks/mutations/event/use-update-event";
import DeleteTodoButton from "./delete-todo-button";
import UpdateTodoButton from "./update-todo-button";
import type { EventEntity } from "@/types";

export default function TodoItem(props: EventEntity) {
  const { mutate: updateEvent } = useUpdateEvent();

  const handleCheckboxClick = () => {
    updateEvent({
      id: props.id,
      is_confirmed: !props.is_confirmed,
      project_id: props.project_id,
    });
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        <Checkbox
          id={`${props.title}-${props.id}`}
          checked={props.is_confirmed}
          onCheckedChange={handleCheckboxClick}
        />
        <Label htmlFor={props.title} className="font-normal">
          {props.title}
        </Label>
      </div>
      <div className="flex gap-2">
        <UpdateTodoButton {...props} />
        <DeleteTodoButton id={props.id} />
      </div>
    </div>
  );
}
