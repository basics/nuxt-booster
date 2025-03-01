import FontCollection from '#booster/classes/FontCollection';
import { useBoosterCritical, useBoosterConfig, useNuxtApp } from '#imports';
import type { Ref } from 'vue';
import { reactive, nextTick, onBeforeUnmount } from 'vue';

import type FontList from '#booster/classes/FontList';
import type {
  DirectiveGetFontOptions,
  DirectiveGetFontResult
} from '../../types';

export default function useBoosterFonts(
  options: {
    critical?: boolean;
  } = {}
) {
  const { isCritical }: { isCritical: Ref<boolean> } =
    useBoosterCritical(options);

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
    options?: DirectiveGetFontOptions
  ): DirectiveGetFontResult => {
    return {
      runtimeConfig,
      isCritical: isCritical.value,
      fontCollection,
      definition: nuxtApp.$booster.getFont(family, weight, style, options)
    };
  };

  return {
    isCritical,
    $getFont
  };
}

declare module '../../types/module' {
  // interface RuntimeConfig {}
  interface BoosterContext {
    getFont: FontList['getFont'];
  }
}
