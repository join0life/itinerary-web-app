import SharedScheduleCallout from "./shared-schedule-callout";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Todo/SharedScheduleCallout",
  component: SharedScheduleCallout,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "팀원과 공유된 프로젝트의 일정 목록 상단에 노출되는 안내 배너입니다. 데이터/라우팅 의존성이 없는 순수 프레젠테이션 컴포넌트라 스토리로 그대로 사용할 수 있습니다.",
      },
    },
  },
} satisfies Meta<typeof SharedScheduleCallout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <SharedScheduleCallout />
    </div>
  ),
};
