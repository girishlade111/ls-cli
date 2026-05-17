export class BaseAgent {
  protected apiKey: string;
  protected endpoint: string;

  constructor(apiKey: string, endpoint: string) {
    this.apiKey = apiKey;
    this.endpoint = endpoint;
  }

  protected async call(prompt: string): Promise<string> {
    return '';
  }
}
