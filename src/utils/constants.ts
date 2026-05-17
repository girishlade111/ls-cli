import process from 'node:process';
import pkg from '../../package.json';

// Environment Configuration
export const NIM_API_KEY = process.env.NIM_API_KEY || '';
export const NIM_BASE_URL = process.env.NIM_BASE_URL || 'https://integrate.api.nvidia.com/v1';
export const NIM_DEFAULT_MODEL = process.env.NIM_DEFAULT_MODEL || 'meta/llama-3.3-70b-instruct';

// CLI Configuration
export const CLI_VERSION = pkg.version;
export const DEBUG_MODE = process.env.LADESTACK_DEBUG === 'true';
export const OUTPUT_DIR = process.cwd();

export function validateEnv() {
  if (!NIM_API_KEY) {
    console.error('NIM_API_KEY not set. Run: export NIM_API_KEY=your_key or add to .env file');
    process.exit(1);
  }
}

// Application Constants
export const APP_NAME = 'LS CLI';
export const APP_VERSION = CLI_VERSION;
export const DEFAULT_SESSION_TIMEOUT = 3600000;
export const MAX_INPUT_LENGTH = 1000;
export const WELCOME_MESSAGE = 'Welcome to LS CLI!';
export const COMMANDS = [
  '/doc',
  '/sheet',
  '/pptx',
  '/research',
  '/resume',
  '/invoice',
  '/build',
  '/coding',
  '/design',
  '/system',
];
