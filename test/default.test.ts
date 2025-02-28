import { beforeAll } from 'vitest';
import { startStaticServer } from './utils.js';
import html from './tests/html.js';
import browser from './tests/browser.js';

import { distDir } from './nuxt.config.js';
import type { TestRuntime } from './types.js';

const runtime: TestRuntime = {};

beforeAll(async () => {
  runtime.serverUrl = (await startStaticServer(distDir)).url;

  console.log(runtime.serverUrl);
});

browser(runtime);
html(distDir);
