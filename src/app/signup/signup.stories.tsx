import { Meta, StoryObj } from "@storybook/react";
import Signup from "./page";

const meta = {
  title: "Pages/Signup",
  component: Signup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Signup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
