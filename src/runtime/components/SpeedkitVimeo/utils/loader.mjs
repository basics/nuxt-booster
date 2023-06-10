import Deferred from '../../../classes/Deferred';
import { nextTick } from '#imports';
const vimeoAPI = new Deferred();

export const load = () => {
  return {
    key: 'vimeo',
    src: 'https://player.vimeo.com/api/player.js',
    async: true,
    defer: true,
    onload: () => {
      vimeoAPI.resolve(window.Vimeo);
    }
  };
};

export const ready = () => {
  return vimeoAPI.promise;
};
