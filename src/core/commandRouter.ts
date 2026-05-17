export interface Command {
  name: string;
  description: string;
  handler: (args: string[]) => Promise<void>;
}

export class CommandRouter {
  private commands: Map<string, Command> = new Map();

  register(command: Command): void {
    this.commands.set(command.name, command);
  }

  get(name: string): Command | undefined {
    return this.commands.get(name);
  }

  list(): Command[] {
    return Array.from(this.commands.values());
  }

  async route(input: string): Promise<void> {
    const parts = input.trim().split(/\s+/);
    const commandName = parts[0].replace(/^\//, "");
    const args = parts.slice(1);

    const command = this.commands.get(commandName);
    if (!command) {
      throw new Error(`Unknown command: /${commandName}. Type /help for available commands.`);
    }

    await command.handler(args);
  }
}
