import { HeartIcon } from "lucide-react";

import { Button } from "./button";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "brand",
        "destructive",
        "destructiveGhost",
        "outline",
        "secondary",
        "ghost",
        "mutedGhost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "xl", "icon", "icon-sm", "icon-lg"],
    },
    disabled: { control: "boolean" },
  },
  args: {
    children: "일정 추가",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Brand: Story = {
  args: {
    variant: "brand",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "삭제",
  },
};

export const DestructiveGhost: Story = {
  args: {
    variant: "destructiveGhost",
    children: "삭제",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const MutedGhost: Story = {
  args: {
    variant: "mutedGhost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Disabled: Story = {
  args: {
    variant: "default",
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    variant: "default",
    children: (
      <>
        <HeartIcon />
        찜하기
      </>
    ),
  },
};

/** Every size, side by side, at the default variant. */
export const AllSizes: Story = {
  args: { variant: "default" },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} size="xs">
        xs
      </Button>
      <Button {...args} size="sm">
        sm
      </Button>
      <Button {...args} size="default">
        default
      </Button>
      <Button {...args} size="lg">
        lg
      </Button>
      <Button {...args} size="xl">
        xl
      </Button>
      <Button {...args} size="icon" aria-label="icon">
        <HeartIcon />
      </Button>
      <Button {...args} size="icon-sm" aria-label="icon-sm">
        <HeartIcon />
      </Button>
      <Button {...args} size="icon-lg" aria-label="icon-lg">
        <HeartIcon />
      </Button>
    </div>
  ),
};

/** Every variant, side by side, at the default size. */
export const AllVariants: Story = {
  args: { variant: "default" },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} variant="default">
        default
      </Button>
      <Button {...args} variant="primary">
        primary
      </Button>
      <Button {...args} variant="brand">
        brand
      </Button>
      <Button {...args} variant="destructive">
        destructive
      </Button>
      <Button {...args} variant="destructiveGhost">
        destructiveGhost
      </Button>
      <Button {...args} variant="outline">
        outline
      </Button>
      <Button {...args} variant="secondary">
        secondary
      </Button>
      <Button {...args} variant="ghost">
        ghost
      </Button>
      <Button {...args} variant="mutedGhost">
        mutedGhost
      </Button>
      <Button {...args} variant="link">
        link
      </Button>
    </div>
  ),
};
