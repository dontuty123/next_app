import { Meta, StoryObj } from "@storybook/react";
import AddProduct from "./page";

const meta = {
  title: "Pages/AddProduct",
  component: AddProduct,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AddProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
