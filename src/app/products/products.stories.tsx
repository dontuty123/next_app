import { Meta, StoryObj } from "@storybook/react";
import Products from "./page";

const meta = {
  title: "Pages/Products",
  component: Products,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Products>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
