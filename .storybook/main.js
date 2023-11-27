/** @type { import('@storybook/vue3-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../src/components/**/*.stories.js"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
