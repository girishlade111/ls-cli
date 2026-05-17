import React from "react";
import { Text, Box } from "ink";

export const SplashScreen: React.FC = () => {
  return (
    <Box flexDirection="column" padding={1}>
      <Text bold color="cyan">
        ⚡ LadeStack CLI v0.1.0
      </Text>
      <Text dimColor>Type /help to see available commands</Text>
    </Box>
  );
};
