import { BaseAgent } from './baseAgent.js';

export class SheetAgent extends BaseAgent {
  async generate(data: string): Promise<string> {
    return this.call(data);
  }
}
