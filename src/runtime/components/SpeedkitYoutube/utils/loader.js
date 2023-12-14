import Deferred from '../../../classes/Deferred';

const youtubeAPI = new Deferred();

typeof window !== 'undefined' &&
  (window.onYouTubeIframeAPIReady = () => {
    youtubeAPI.resolve(window.YT);
  });

export const load = () => {
  return {
    key: 'youtube',
    src: 'https://www.youtube.com/iframe_api',
    async: true,
    defer: true
  };
};

export const ready = () => {
  return youtubeAPI.promise;
};
