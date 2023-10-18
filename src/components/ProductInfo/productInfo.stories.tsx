import { Meta, StoryObj } from "@storybook/react";
import ProductInfo from ".";
import { mockProduct } from "@/assets/mockdata/product.mock";

const meta = {
  title: "Components/ProductInfo",
  component: ProductInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProductInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    productInfo: mockProduct,
  },
};
