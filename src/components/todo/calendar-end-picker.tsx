import { ChevronDownIcon } from "lucide-react";
import { ko } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import type { CalendarPickerProps } from "@/types";
import { combinedDateAndTime } from "@/lib/utils";

export function CalendarEndPicker({
  value,
  onChange,
  id,
  isAlldayTrue,
}: CalendarPickerProps) {
  const [open, setOpen] = useState(false);

  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");

  useEffect(() => {
    if (!value) return;

    const hh = String(value.getHours()).padStart(2, "0");
    const mm = String(value.getMinutes()).padStart(2, "0");

    setTime(`${hh}:${mm}`);
    setDate(value);
  }, [value]);

  return (
    <div className="relative">
      <div className="flex gap-2">
        <div className="flex flex-col gap-3">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date-picker"
                className="w-32 justify-between font-normal"
              >
                {value
                  ? value.toLocaleDateString()
                  : new Date().toLocaleDateString()}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                locale={ko}
                id={id}
                mode="single"
                selected={date}
                captionLayout="dropdown"
                startMonth={new Date(2020, 0)}
                endMonth={new Date(2050, 11)}
                onSelect={(date) => {
                  if (!date) return;
                  setDate(date);
                  const combined = combinedDateAndTime(date, time);
                  onChange(combined);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        {!isAlldayTrue && (
          <div className="flex flex-col gap-3">
            <Input
              className="text-sm"
              type="time"
              step="300"
              value={time}
              onChange={(e) => {
                const newTime = e.target.value;
                setTime(newTime);

                if (!date) return;

                const combined = combinedDateAndTime(date, newTime);
                onChange(combined);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
