import FontCollection from '#booster/classes/FontCollection';
import { useBoosterCritical, useBoosterConfig, useNuxtApp } from '#imports';
import { reactive, nextTick, onBeforeUnmount } from 'vue';
import type { Ref } from 'vue';
import type FontList from '#booster/classes/FontList';
import type {
  DirectiveGetFontArguments,
  DirectiveGetFontOptions,
  DirectiveGetFontResult
} from '../../module';
import type { FontFamily, FontStyle, FontWeight } from '#build/types/booster';

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

  function $getFont(
    family: FontFamily | DirectiveGetFontArguments,
    weight?: FontWeight,
    style?: FontStyle,
    options?: DirectiveGetFontOptions
  ): DirectiveGetFontResult {
    if (typeof family === 'object') {
      options = family.options;
      style = family.style;
      weight = family.weight;
      family = family.family;
    }
    return {
      runtimeConfig,
      isCritical: isCritical.value,
      fontCollection,
      definition: nuxtApp.$booster.getFont(family, weight, style, options)
    };
  }

  return {
    isCritical,
    $getFont
  };
}

declare module '../../types/module' {
  // interface RuntimeConfig {}
  interface BoosterProvide {
    getFont: FontList['getFont'];
  }
}
