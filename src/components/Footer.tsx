import React from 'react';
import { Box, Text } from 'ink';

const Footer: React.FC = () => {
  return (
    <Box borderStyle="round" borderColor="gray" paddingX={1} marginTop={1}>
      <Text dimColor>Type a command or press Ctrl+C to exit</Text>
    </Box>
  );
};

export default Footer;