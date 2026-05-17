export class NIMClient {
  private apiKey: string;
  private endpoint: string;

  constructor(apiKey: string, endpoint: string) {
    this.apiKey = apiKey;
    this.endpoint = endpoint;
  }

  async chat(prompt: string): Promise<string> {
    return '';
  }
}
