import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>제주도 여행</CardTitle>
        <CardDescription>2026.09.20 - 2026.09.23</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          함께 만드는 제주 여행 일정. 멤버를 초대하고 일정을 공유해보세요.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">일정 보기</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>부산 여행</CardTitle>
        <CardDescription>owner: cupshop</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            수정
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          해운대와 광안리를 둘러보는 2박 3일 일정입니다.
        </p>
      </CardContent>
    </Card>
  ),
};
