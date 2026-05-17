import React from "react";
import { Text, Box } from "ink";

interface CommandDropdownProps {
  commands: string[];
  onSelect: (command: string) => void;
}

export const CommandDropdown: React.FC<CommandDropdownProps> = ({
  commands,
  onSelect,
}) => {
  return (
    <Box flexDirection="column" borderStyle="round" padding={1}>
      <Text bold>Available Commands:</Text>
      {commands.map((cmd) => (
        <Text key={cmd}>/{cmd}</Text>
      ))}
    </Box>
  );
};
