// .storybook/preview.js
import { View } from "react-native";

export const parameters = {};

export const decorators = [
  (Story) => (
    <View style={{ padding: 8 }}>
      <Story />
    </View>
  ),
];
