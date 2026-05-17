import { BaseAgent } from './baseAgent.js';

export class ResearchAgent extends BaseAgent {
  async search(query: string): Promise<string> {
    return this.call(query);
  }
}