// ./storybook-web/main.js
module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-essentials", "@storybook/addon-react-native-web"],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react-webpack5",
  typescript: {
    reactDocgen: "react-docgen-typescript-plugin",
  },
};
