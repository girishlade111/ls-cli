import { BaseAgent, AgentResponse } from "./baseAgent";

export class DocAgent extends BaseAgent {
  async execute(prompt: string): Promise<AgentResponse> {
    // TODO: Implement document generation agent
    return { success: true, data: "" };
  }
}
