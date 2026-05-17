#!/usr/bin/env node
import 'dotenv/config';
import { validateEnv } from './utils/constants.js';

validateEnv();

import React from 'react';
import { render } from 'ink';
import App from './app.js';

const { unmount } = render(React.createElement(App));

process.on('SIGINT', () => {
  unmount();
  process.exit(0);
});
