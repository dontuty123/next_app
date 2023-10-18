import { Meta, StoryObj } from "@storybook/react";
import UserDashboard from ".";

const meta = {
  title: "Components/UserDashboard",
  component: UserDashboard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
