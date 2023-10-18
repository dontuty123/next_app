import type { Preview } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../src/lib/redux/store";
import React from "react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

const withI18next = (Story) => {
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};

export const decorators = [withI18next];

export default preview;
