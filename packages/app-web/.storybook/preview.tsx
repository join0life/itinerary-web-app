import "../src/index.css";

import { withThemeByClassName } from "@storybook/addon-themes";

import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    backgrounds: {
      disable: true,
    },
  },
  decorators: [
    // Toggles the `dark` class on <html>, matching how this design system's
    // `.dark` selector (see src/styles/design-system.css) switches semantic
    // CSS variables — it's a class on an ancestor, not a media query.
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
      parentSelector: "html",
    }),
  ],
};

export default preview;
