export const APP_NAME = "LadeStack CLI";
export const APP_VERSION = "0.1.0";
export const APP_DESCRIPTION = "Build smarter, faster with AI-powered tools";

export const DEFAULT_MODEL = "nvidia/llama-3.1-nemotron-70b-instruct";
export const API_BASE_URL = "https://integrate.api.nvidia.com/v1";

export const COMMANDS = [
  "doc",
  "sheet",
  "pptx",
  "research",
  "resume",
  "invoice",
  "build",
  "coding",
  "design",
  "system",
] as const;
