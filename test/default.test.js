import { beforeAll } from 'vitest';
import { startStaticServer } from './utils';
import html from './tests/html.js';
import browser from './tests/browser.js';

import { distDir } from './nuxt.config.js';

const runtime = { serverUrl: null };

beforeAll(async () => {
  runtime.serverUrl = (await startStaticServer(distDir)).url;
  // eslint-disable-next-line no-console
  console.log(runtime.serverUrl);
});

browser(runtime);
html(distDir);
