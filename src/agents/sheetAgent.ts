import { BaseAgent, AgentResponse } from "./baseAgent";

export class SheetAgent extends BaseAgent {
  async execute(prompt: string): Promise<AgentResponse> {
    // TODO: Implement spreadsheet generation agent
    return { success: true, data: "" };
  }
}
