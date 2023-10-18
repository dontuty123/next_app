import { Meta, StoryObj } from "@storybook/react";
import Login from "./page";

const meta = {
  title: "Pages/Login",
  component: Login,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
