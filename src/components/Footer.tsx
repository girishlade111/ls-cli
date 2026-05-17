import React from "react";
import { Text, Box } from "ink";

export const Footer: React.FC = () => {
  return (
    <Box borderTop={true} padding={1}>
      <Text dimColor>LadeStack CLI — Build smarter, faster.</Text>
    </Box>
  );
};
