/* eslint-disable no-secrets/no-secrets */
import { join, resolve } from 'path';
import { beforeAll } from 'vitest';
import { generate, startStaticServer } from './utils';
import html from './tests/html';
import browser from './tests/browser';

const runtime = { serverUrl: null };

const testDir = resolve(__dirname, '.test');
const distDir = resolve(testDir, 'dist');
const buildDir = join(testDir, '.nuxt');

beforeAll(async () => {
  await generate(buildDir, distDir);
  runtime.serverUrl = (await startStaticServer(distDir)).url;
});

browser(runtime);
html(distDir);
