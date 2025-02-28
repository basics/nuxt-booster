import type { Script } from '@unhead/schema';
import Deferred from '../../../classes/Deferred';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
}

const youtubeAPI = new Deferred() as Deferred<typeof YT>;

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
typeof window !== 'undefined' &&
  (window.onYouTubeIframeAPIReady = () => {
    youtubeAPI.resolve(window.YT);
  });

export function load(): Script {
  return {
    key: 'youtube',
    src: 'https://www.youtube.com/iframe_api',
    async: true,
    defer: true
  };
}

export const ready = () => {
  return youtubeAPI.promise;
};
