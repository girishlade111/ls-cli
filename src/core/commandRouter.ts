type CommandHandler = (args: string[]) => Promise<void>;

const COMMANDS: Record<string, CommandHandler> = {};

export const registerCommand = (name: string, handler: CommandHandler): void => {
  COMMANDS[name] = handler;
};

export const routeCommand = async (input: string): Promise<void> => {
  const parts = input.trim().split(' ');
  const cmd = parts[0];
  const args = parts.slice(1);

  const handler = COMMANDS[cmd];
  if (handler) {
    await handler(args);
  } else {
    console.log(`Unknown command: ${cmd}`);
  }
};