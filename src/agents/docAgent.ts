import { BaseAgent } from './baseAgent.js';

export class DocAgent extends BaseAgent {
  async generate(content: string): Promise<string> {
    return this.call(content);
  }
}