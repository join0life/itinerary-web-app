import CalendarEventItem from "./calendar-event-item";

import type { CalendarEvent } from "@itinerary/shared";
import type { Meta, StoryObj } from "@storybook/react-vite";

const baseEvent: CalendarEvent = {
  id: 1,
  title: "제주 공항 도착",
  allday: false,
  startAt: new Date(2026, 8, 20, 9, 0),
  endAt: new Date(2026, 8, 20, 10, 30),
  projectId: 1,
  location: "제주국제공항",
  memo: "",
  isConfirmed: true,
};

const meta = {
  title: "Calendar/CalendarEventItem",
  component: CalendarEventItem,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "주간 캘린더 그리드 위에 절대 위치로 배치되는 일정 블록입니다. 클릭 시 zustand 스토어(`useOpenViewTodoModal`)의 액션만 호출하므로 React Query나 라우팅 컨텍스트 없이도 스토리로 렌더링할 수 있습니다. 클릭해도 실제 모달은 이 스토리에 마운트되어 있지 않아 화면 변화는 없습니다.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="relative h-40 w-56 rounded-md border border-dashed">
        <Story />
      </div>
    ),
  ],
  args: {
    event: baseEvent,
    columnIndex: 0,
  },
} satisfies Meta<typeof CalendarEventItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Overlapping: Story = {
  args: {
    columnIndex: 1,
  },
  decorators: [
    (Story) => (
      <div className="relative h-40 w-80 rounded-md border border-dashed">
        <Story />
      </div>
    ),
  ],
};

export const LongTitle: Story = {
  args: {
    event: {
      ...baseEvent,
      title: "렌터카 픽업 및 숙소 체크인, 저녁 식사 예약까지 이어지는 긴 일정 제목",
    },
  },
};
