import { Meta, StoryObj } from "@storybook/react";
import ProductController from ".";
import { mockProduct } from "@/assets/mockdata/product.mock";

const meta = {
  title: "Components/ProductController",
  component: ProductController,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProductController>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    productInfo: mockProduct,
  },
};
