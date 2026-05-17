import { BaseAgent } from './baseAgent.js';

export class CodingAgent extends BaseAgent {
  async generateCode(task: string): Promise<string> {
    return this.call(task);
  }
}