import { Meta, StoryObj } from "@storybook/react";
import EditUser from "./page";

const meta = {
  title: "Pages/EditUser",
  component: EditUser,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
      query: {
        id: "0",
      },
      router: {
        basePath: "/edituser",
      },
    },
  },
  //   excludeStories: /.*mockUser$/,
  tags: ["autodocs"],
} satisfies Meta<typeof EditUser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
