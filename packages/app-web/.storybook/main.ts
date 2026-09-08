import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { mergeConfig } from "vite";

import type { StorybookConfig } from "@storybook/react-vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-themes"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  async viteFinal(config) {
    const path = await import("path");
    const tailwindcss = (await import("@tailwindcss/vite")).default;

    return mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          "@": path.resolve(dirname(fileURLToPath(import.meta.url)), "../src"),
          "@itinerary/shared": path.resolve(
            dirname(fileURLToPath(import.meta.url)),
            "../../shared/src",
          ),
          "@itinerary/tokens": path.resolve(
            dirname(fileURLToPath(import.meta.url)),
            "../../tokens/src",
          ),
        },
      },
    });
  },
};
export default config;
