import Deferred from '../../../classes/Deferred';

const youtubeAPI = new Deferred();

global.onYouTubeIframeAPIReady = (e) => {
  youtubeAPI.resolve(global.YT);
};

export const load = () => {
  return {
    hid: 'youtube',
    src: 'https://www.youtube.com/iframe_api',
    async: true,
    defer: true
  };
};

export const ready = () => {
  return youtubeAPI.promise;
};
