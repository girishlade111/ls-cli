import { BaseAgent, AgentResponse } from "./baseAgent";

export class CodingAgent extends BaseAgent {
  async execute(prompt: string): Promise<AgentResponse> {
    // TODO: Implement coding agent
    return { success: true, data: "" };
  }
}
