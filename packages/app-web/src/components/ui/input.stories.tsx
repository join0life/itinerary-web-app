import { Input } from "./input";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
  args: {
    placeholder: "여행 제목을 입력하세요",
  },
  render: (args) => <Input {...args} className="w-72" />,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: "제주도 여행",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "수정할 수 없어요",
  },
};

export const Invalid: Story = {
  args: {
    "aria-invalid": true,
    defaultValue: "잘못된 입력",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "비밀번호",
  },
};
