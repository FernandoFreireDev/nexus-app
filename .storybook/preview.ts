import type { Preview } from "@storybook/nextjs-vite";

import "../src/styles/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
		layout: 'centered',
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
