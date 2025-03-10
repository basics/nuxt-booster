import Deferred from '../../../classes/Deferred';
import type { Script } from '@unhead/vue';

const vimeoAPI = new Deferred() as Deferred<VimeoApi>;

declare global {
  interface Window {
    BOOSTER_VIMEO_API_RESOLVE?: CallableFunction;
  }
}

if (!import.meta.server) {
  window.BOOSTER_VIMEO_API_RESOLVE = (api: VimeoApi) => {
    vimeoAPI.resolve(api);
    delete window.BOOSTER_VIMEO_API_RESOLVE;
  };
}

export interface VimeoApiPlayer {
  play: () => void;
  getPaused: () => Promise<boolean>;
  pause: () => void;
  on: (event: string, callback: () => void) => void;
  destroy: () => void;
  element: HTMLElement;
  ready: () => Promise<void>;
}

export enum VimeoApiPlayerState {
  PLAYING,
  ENDED,
  PAUSE
}

export interface VimeoApi {
  Player: new (el: HTMLElement) => VimeoApiPlayer;
}

declare global {
  interface Window {
    Vimeo: VimeoApi;
  }
}

export interface VimeoApiResponse {
  type: string;
  version: string;
  provider_name: string;
  provider_url: string;
  title: string;
  author_name: string;
  author_url: string;
  is_plus: string;
  account_type: string;
  html: string;
  upload_date: string;
  video_id: number;
  uri: string;
  thumbnail_url?: string;
  description: string;
}

export function load(): Script {
  return {
    key: 'vimeo',
    src: 'https://player.vimeo.com/api/player.js',
    async: true,
    defer: true,
    onload: 'VIMEO_API_RESOLVE(window.Vimeo)'
  };
}
export function ready() {
  return vimeoAPI.promise;
}
