export interface NimMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface NimResponse {
  id: string;
  choices: {
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }[];
}

export class NimClient {
  private apiKey: string;
  private baseUrl: string;
  private model: string;

  constructor(apiKey: string, model: string = "nvidia/llama-3.1-nemotron-70b-instruct") {
    this.apiKey = apiKey;
    this.baseUrl = "https://integrate.api.nvidia.com/v1";
    this.model = model;
  }

  async chat(messages: NimMessage[]): Promise<string> {
    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        messages,
        temperature: 0.7,
        max_tokens: 4096,
      }),
    });

    if (!response.ok) {
      throw new Error(`NIM API error: ${response.status} ${response.statusText}`);
    }

    const data = (await response.json()) as NimResponse;
    return data.choices[0].message.content;
  }
}
