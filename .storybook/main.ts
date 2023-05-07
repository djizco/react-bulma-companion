import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  }
};

export default config;
