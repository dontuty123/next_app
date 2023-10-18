import { Meta, StoryObj } from "@storybook/react";
import AddUser from "./page";

const meta = {
  title: "Pages/AddUser",
  component: AddUser,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof AddUser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
