import { BaseAgent, AgentResponse } from "./baseAgent";

export class ResearchAgent extends BaseAgent {
  async execute(prompt: string): Promise<AgentResponse> {
    // TODO: Implement research agent
    return { success: true, data: "" };
  }
}
