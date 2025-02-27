import FontCollection from '#booster/classes/FontCollection';
import { useBoosterCritical, useBoosterConfig, useNuxtApp } from '#imports';
import { reactive, nextTick, onBeforeUnmount } from 'vue';

import type FontList from '#booster/classes/FontList';
import type { IGetFontOptions, IGetFontResult } from '../../types';

export default function (context = {}) {
  const { isCritical, critical } = useBoosterCritical(context);

  const runtimeConfig = useBoosterConfig();

  const nuxtApp = useNuxtApp();

  const fontCollection = reactive(new FontCollection());

  try {
    const entry = nuxtApp.$booster.head.push({
      fontCollection,
      isCritical: isCritical.value,
      options: runtimeConfig
    });
    onBeforeUnmount(() => nextTick(() => entry.dispose()));
  } catch (error) {
    console.error(error);
  }

  const $getFont = (
    family: string,
    weight?: string | number,
    style?: string,
    options?: IGetFontOptions
  ): IGetFontResult => {
    return {
      runtimeConfig,
      isCritical: isCritical.value,
      fontCollection,
      definition: nuxtApp.$booster.getFont(family, weight, style, options)
    };
  };

  return {
    isCritical,
    critical,
    $getFont
  };
}

declare module '../../types' {
  // interface RuntimeConfig {}
  interface BoosterContext {
    getFont: FontList['getFont'];
  }
}
