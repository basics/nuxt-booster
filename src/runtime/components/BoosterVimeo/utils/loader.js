import Deferred from '../../../classes/Deferred';

const vimeoAPI = new Deferred();

export const load = () => {
  return {
    hid: 'vimeo',
    src: 'https://player.vimeo.com/api/player.js',
    async: true,
    defer: true,
    callback: () => vimeoAPI.resolve(window.Vimeo)
  };
};

export const ready = () => {
  return vimeoAPI.promise;
};
