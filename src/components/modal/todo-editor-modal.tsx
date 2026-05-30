import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { CalendarStartPicker } from "../todo/calender-start-picker";
import { CalendarEndPicker } from "../todo/calendar-end-picker";
import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";
import { useCreateEvent } from "@/hooks/mutations/event/use-create-event";
import { toast } from "sonner";
import { generateErrorMessage } from "@/lib/error";
import type { EventPayload } from "@/types";
import { startOfDay } from "date-fns";
import { useRecentProjectId } from "@/store/recent-project-id";
import { useOpenAlertModal } from "@/store/use-alert-modal";
import { useTodoEditorModal } from "@/store/todo-editor-modal";
import { useUpdateEvent } from "@/hooks/mutations/event/use-update-event";
import { formatDate, formatDateWithTime } from "@/lib/utils";

const INITIAL_FORM = {
  title: "",
  allday: false,
  startAt: new Date(),
  endAt: new Date(),
  location: "",
  memo: "",
};

export default function TodoEditorModal() {
  const todoEditorModal = useTodoEditorModal();
  const projectId = useRecentProjectId();
  const openAlertModal = useOpenAlertModal();

  const [form, setForm] = useState<EventPayload>(INITIAL_FORM);

  const { mutate: createEvent, isPending: isCreateEventPending } =
    useCreateEvent({
      onSuccess: () => {
        todoEditorModal.actions.close();
      },
      onError: (error) => {
        toast.error(generateErrorMessage(error), {
          position: "top-center",
        });
      },
    });

  const { mutate: updateEvent, isPending: isUpdateEventPending } =
    useUpdateEvent({
      onSuccess: () => {
        todoEditorModal.actions.close();
      },
      onError: (error) => {
        toast.error("일정 수정에 실패했습니다.", {
          position: "top-center",
        });
      },
    });

  useEffect(() => {
    if (!todoEditorModal.isOpen) return;

    if (todoEditorModal.type === "CREATE") {
      setForm(INITIAL_FORM);
    }
    if (todoEditorModal.type === "EDIT") {
      setForm({
        projectId: todoEditorModal.projectId,
        title: todoEditorModal.title,
        allday: todoEditorModal.allday,
        startAt: todoEditorModal.startAt
          ? new Date(todoEditorModal.startAt)
          : undefined,
        endAt: todoEditorModal.endAt
          ? new Date(todoEditorModal.endAt)
          : undefined,
        location: todoEditorModal.location,
        memo: todoEditorModal.memo,
      });
    }

    if (todoEditorModal.type === "VIEW") {
      setForm({
        projectId: todoEditorModal.projectId,
        title: todoEditorModal.title,
        allday: todoEditorModal.allday,
        startAt: todoEditorModal.startAt
          ? new Date(todoEditorModal.startAt)
          : undefined,
        endAt: todoEditorModal.endAt
          ? new Date(todoEditorModal.endAt)
          : undefined,
        location: todoEditorModal.location,
        memo: todoEditorModal.memo,
      });
    }
  }, [todoEditorModal.isOpen]);

  const handleSaveEventClick = () => {
    if (!projectId) return;
    if (form.title.trim() === "") return;
    if (!form.startAt || !form.endAt) return;

    let startAt = form.startAt;
    let endAt = form.endAt;

    if (form.allday) {
      startAt = startOfDay(startAt);
      endAt = startOfDay(endAt);
    } else if (endAt < startAt) {
      endAt = startAt;
    }

    if (!todoEditorModal.isOpen) return;

    if (todoEditorModal.type === "CREATE") {
      createEvent({
        projectId: projectId,
        title: form.title,
        allday: form.allday,
        startAt: startAt.toISOString(),
        endAt: endAt.toISOString(),
        location: form.location,
        memo: form.memo,
      });
    }

    if (todoEditorModal.type === "EDIT") {
      updateEvent({
        id: todoEditorModal.id,
        title: form.title,
        allday: form.allday,
        start_at: startAt.toISOString(),
        end_at: endAt.toISOString(),
        location: form.location,
        memo: form.memo,
      });
    }
  };

  const handleCloseModal = () => {
    if (
      form.title !== "" &&
      todoEditorModal.isOpen &&
      todoEditorModal.type !== "VIEW"
    ) {
      openAlertModal({
        title: "일정 작성이 마무리되지 않았습니다.",
        description: "이 화면에서 나가면 작성 중이던 내용이 사라집니다.",
        onPositive: () => {
          todoEditorModal.actions.close();
        },
      });

      return;
    }
    todoEditorModal.actions.close();
  };

  const isPending = isCreateEventPending || isUpdateEventPending;

  if (todoEditorModal.isOpen && todoEditorModal.type === "VIEW") {
    return (
      <Dialog open={todoEditorModal.isOpen} onOpenChange={handleCloseModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>새 일정 만들기</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-[var(--spacing-5)]">
            <div className="form-field">
              <div className="form-field">
                <Label htmlFor="todo-event">제목</Label>
                <p id="todo-event">{form.title}</p>
              </div>

              <div className="form-field">
                <Label htmlFor="todo-allday">하루종일</Label>
                <Switch
                  readOnly
                  id="todo-allday"
                  checked={form.allday}
                  className="cursor-pointer"
                />
              </div>

              <div className="form-field">
                <Label htmlFor="todo-start">시작</Label>
                {form.allday ? (
                  <p id="todo-start">{formatDate(form.startAt!)}</p>
                ) : (
                  <p id="todo-start">{formatDateWithTime(form.startAt!)}</p>
                )}
              </div>

              <div className="form-field">
                <Label htmlFor="todo-end">종료</Label>
                {form.allday ? (
                  <p id="todo-end">{formatDate(form.endAt!)}</p>
                ) : (
                  <p id="todo-end">{formatDateWithTime(form.endAt!)}</p>
                )}
              </div>

              <div className="form-field">
                <Label htmlFor="todo-location">위치</Label>
                <Input
                  readOnly
                  value={form.location}
                  disabled={isPending}
                  id="todo-location"
                />
              </div>

              <div className="form-field">
                <Label htmlFor="todo-memo">메모</Label>
                <Textarea
                  readOnly
                  value={form.memo}
                  disabled={isPending}
                  id="todo-memo"
                />
              </div>
            </div>

            <div className="form-actions">
              <Button
                disabled={isPending}
                onClick={() => todoEditorModal.actions.close()}
                className="flex-1"
              >
                확인
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={todoEditorModal.isOpen} onOpenChange={handleCloseModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 일정 만들기</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-[var(--spacing-5)]">
          <div className="form-field">
            <div className="form-field">
              <Label htmlFor="todo-event">제목</Label>
              <Input
                value={form.title}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, title: e.target.value }))
                }
                disabled={isPending}
                id="todo-event"
              ></Input>
            </div>

            <div className="form-field">
              <Label htmlFor="todo-allday">하루종일</Label>
              <Switch
                id="todo-allday"
                checked={form.allday}
                onCheckedChange={() =>
                  setForm((prev) => ({ ...prev, allday: !form.allday }))
                }
                className="cursor-pointer"
              />
            </div>

            <div className="form-field">
              <Label htmlFor="todo-start">시작</Label>
              <CalendarStartPicker
                isAlldayTrue={form.allday}
                id="todo-start"
                value={form.startAt ? new Date(form.startAt) : undefined}
                onChange={(value) =>
                  setForm((prev) => ({
                    ...prev,
                    startAt: value,
                    endAt:
                      prev.endAt && prev.endAt < value ? value : prev.endAt,
                  }))
                }
              />
            </div>

            <div className="form-field">
              <Label htmlFor="todo-end">종료</Label>
              <CalendarEndPicker
                isAlldayTrue={form.allday}
                id="todo-end"
                value={form.endAt ? new Date(form.endAt) : undefined}
                onChange={(value) =>
                  setForm((prev) => {
                    if (!prev.startAt) {
                      return { ...prev, endAt: value };
                    }

                    return {
                      ...prev,
                      endAt:
                        value < prev.startAt || value === prev.startAt
                          ? prev.startAt
                          : value,
                    };
                  })
                }
              />
            </div>

            <div className="form-field">
              <Label htmlFor="todo-location">위치</Label>
              <Input
                value={form.location}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, location: e.target.value }))
                }
                disabled={isPending}
                id="todo-location"
              />
            </div>

            <div className="form-field">
              <Label htmlFor="todo-memo">메모</Label>
              <Textarea
                value={form.memo}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, memo: e.target.value }))
                }
                disabled={isPending}
                id="todo-memo"
              />
            </div>
          </div>

          <div className="form-actions">
            <Button
              disabled={isPending}
              className="flex-1"
              variant={"outline"}
              onClick={() => todoEditorModal.actions.close()}
            >
              취소
            </Button>
            <Button
              disabled={isPending}
              onClick={handleSaveEventClick}
              className="flex-1"
            >
              확인
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
