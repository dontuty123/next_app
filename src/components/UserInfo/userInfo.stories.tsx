import { Meta, StoryObj } from "@storybook/react";
import { mockUser } from "@/assets/mockdata/user.mock";
import UserInfo from ".";

const meta = {
  title: "Components/UserInfo",
  component: UserInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    userInfo: mockUser[0],
  },
};
