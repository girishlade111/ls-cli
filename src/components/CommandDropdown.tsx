import React from 'react';
import { Box, Text } from 'ink';

const COMMANDS = [
  '/doc',
  '/sheet',
  '/pptx',
  '/research',
  '/resume',
  '/invoice',
  '/build',
  '/coding',
  '/design',
  '/system',
];

const CommandDropdown: React.FC = () => {
  return (
    <Box flexDirection="column" marginY={1}>
      <Text bold underline>
        Available Commands:
      </Text>
      {COMMANDS.map((cmd) => (
        <Text key={cmd}>&gt; {cmd}</Text>
      ))}
    </Box>
  );
};

export default CommandDropdown;
