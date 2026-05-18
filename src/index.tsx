import 'dotenv/config';
import { validateEnv } from './utils/constants.js';

validateEnv();

import React from 'react';
import { render } from 'ink';
import App from './app.js';

try {
  const { unmount } = render(React.createElement(App));

  process.on('SIGINT', () => {
    unmount();
    process.exit(0);
  });
} catch (error) {
  console.error('Failed to start CLI:', error);
  process.exit(1);
}