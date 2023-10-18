import { Meta, StoryObj } from "@storybook/react";
import UserController from ".";
import { mockUser } from "@/assets/mockdata/user.mock";

const meta = {
  title: "Components/UserController",
  component: UserController,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserController>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    userInfo: mockUser[0],
  },
};
