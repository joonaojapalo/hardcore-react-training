import type { Preview } from "@storybook/react";

import "normalize.css";
// import "@/app/(app)/typography.css.ts";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
