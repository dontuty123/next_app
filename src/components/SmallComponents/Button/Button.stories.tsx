import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className:
      "bg-blue-500 mb-5 hover:bg-blue-700 text-white dark:text-black/60 font-bold py-2 px-4 rounded mt-6 w-[100%] dark:bg-gray-300  dark:text-black dark:hover:text-black dark:hover:border-black",
    contentButton: "Button",
  },
};

export const Secondary: Story = {
  args: {
    className:
      "bg-transparent hover:bg-blue-500 text-blue-700 dark:text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded dark:bg-gray-700 dark:border-gray-700 dark:hover:border-blue-500",
    contentButton: "➕ Add something",
  },
};

export const EditBtn: Story = {
  args: {
    className:
      "col-span-1 bg-transparent hover:bg-blue-500 dark:text-white text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded",
    contentButton: "Edit",
  },
};

export const DeleteBtn: Story = {
  args: {
    className:
      "col-span-1 bg-transparent hover:bg-rose-500 dark:text-white text-rose-700 font-semibold hover:text-white px-4 border border-rose-500 hover:border-transparent rounded",
    contentButton: "Delete",
  },
};
