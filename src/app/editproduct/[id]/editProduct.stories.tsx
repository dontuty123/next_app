import { Meta, StoryObj } from "@storybook/react";
import EditProductPage from "./page";

const meta = {
  title: "Pages/EditProductPage",
  component: EditProductPage,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
      router: {
        basePath: "/editproduct",
      },
      navigation: {
        query: {
          id: "1",
        },
      },
    },
  },
  //   excludeStories: /.*mockUser$/,
  tags: ["autodocs"],
} satisfies Meta<typeof EditProductPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
