export interface AgentResponse {
  success: boolean;
  data?: string;
  error?: string;
}

export abstract class BaseAgent {
  protected apiKey: string;
  protected model: string;

  constructor(apiKey: string, model: string) {
    this.apiKey = apiKey;
    this.model = model;
  }

  abstract execute(prompt: string): Promise<AgentResponse>;
}
