import { beforeAll } from 'vitest';
import { startStaticServer } from './utils';
import html from './tests/html.mjs';
import browser from './tests/browser.mjs';

import { distDir } from './nuxt.config.mjs';

const runtime = { serverUrl: null };

beforeAll(async () => {
  runtime.serverUrl = (await startStaticServer(distDir)).url;
  console.log(runtime.serverUrl);
});

browser(runtime);
html(distDir);
