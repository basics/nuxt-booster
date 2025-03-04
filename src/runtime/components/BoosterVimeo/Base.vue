<template>
  <div :class="{ ready, playing, 'iframe-mode': iframeMode }">
    <slot name="background" v-bind="{ playing, videoData }" />
    <div class="player">
      <slot name="beforePlayer" />
      <iframe
        ref="playerEl"
        :key="src"
        :inert="inert"
        :title="playerTitle"
        :src="src"
        allow="autoplay; fullscreen; picture-in-picture"
        @load="onLoad"
      />
      <default-button aria-label="Play Video" @click="onInit">
        <booster-picture
          class="poster"
          v-bind="pictureDataset"
          :title="playerTitle"
        />
        <slot v-if="loading" name="loading-spinner" />
        <slot v-if="!ready && !loading" name="play" />
      </default-button>
      <slot name="afterPlayer" />
    </div>
    <slot v-bind="{ playing, videoData }" />
  </div>
</template>

<script setup lang="ts">
import { useHead, useBoosterCritical } from '#imports';
import {
  ref,
  computed,
  markRaw,
  type Ref,
  watch,
  onMounted,
  onUnmounted
} from 'vue';
import type { Script } from '@unhead/schema';

import DefaultButton from '../Button.vue';
import {
  load,
  ready as apiReady,
  VimeoApiPlayerState,
  type VimeoApiPlayer,
  type VimeoApiResponse
} from './utils/loader';
import Vimeo from './classes/Vimeo';
import { isTouchSupported } from '#booster/utils/browser';
import BoosterPicture from '#booster/components/BoosterPicture.vue';
import props from './props';
import useBoosterProvide from '#booster/composables/useBoosterProvide';
import { withQuery } from 'ufo';

useBoosterCritical();
const $booster = useBoosterProvide();

const vimeo = new Vimeo();

const inert = ref(false);
const player: Ref<VimeoApiPlayer | undefined> = ref(undefined);

const playerEl: Ref<HTMLIFrameElement | undefined> = ref(undefined);
const ready = ref(false);
const loading = ref(false);
const playing = ref(false);
const isTouchDevice = ref(isTouchSupported());

const $props = defineProps(props);
const $emit = defineEmits(['ready', 'playing']);

// setup

const script: Ref<Script[]> = ref([]);
const videoData: Ref<VimeoApiResponse | undefined> = ref();
const iframeMode = ref(false);
const src: Ref<string | undefined> = ref();
const videoId = ref(new URL($props.url || '').pathname.replace('/', ''));

const playerTitle = computed(() => {
  return $props.title || (videoData.value && videoData.value.title);
});

const playerOptions = computed(() => {
  return {
    dnt: true,
    autopause: false,
    ...$props.options,
    playsinline: true,
    autoplay: $props.autoplay,
    muted: isTouchDevice.value || $props.mute
  };
});

const pictureDataset = computed(() => {
  return {
    formats: $booster.targetFormats,
    title: $props.title,
    sources: $props.posterSources.map(source => ({
      ...source,
      src:
        source.src ||
        videoData.value?.thumbnail_url?.replace(
          'https://i.vimeocdn.com',
          'vimeo'
        ) ||
        ''
    }))
  };
});

onMounted(() => {
  inert.value = true;
});

onUnmounted(() => {
  if (player.value) {
    vimeo.remove(player.value);
  }
});

// head

if (!(import.meta.server || process.env.prerender)) {
  useHead({
    script: computed(() => {
      return script.value;
    })
  });
}

// computed

const playerSrc = computed(
  () =>
    videoData.value?.html
      .replace(/.*src="([^"]*)".*/, '$1')
      .replace(/&amp;/g, '&') ||
    `https://player.vimeo.com/video/${videoId.value}`
);

try {
  const url = withQuery('https://vimeo.com/api/oembed.json', {
    url: $props.url,
    width: 1920,
    height: 1080,
    ...playerOptions.value
  });
  const response = await fetch(url);
  videoData.value = await response.json();
} catch (error) {
  console.error(error);
  iframeMode.value = true;
  src.value = playerSrc.value;
}

// watch

watch(
  () => videoData.value,
  data => {
    if (data && $props.autoplay) {
      onInit();
    }
  }
);
watch(
  () => ready.value,
  () => {
    inert.value = false;
  }
);

// functions

function onInit() {
  loading.value = true;
  src.value = playerSrc.value;
  script.value = [load()];
  if (iframeMode.value && playerEl.value) {
    // force iframe reload for onload
    playerEl.value.src = String(playerEl.value.src);
  }
}

function onPlayerStateChange(state: VimeoApiPlayerState) {
  if (state === VimeoApiPlayerState.PLAYING) {
    playing.value = true;
  } else if (
    state === VimeoApiPlayerState.ENDED ||
    state === VimeoApiPlayerState.PAUSE
  ) {
    playing.value = false;
  }
  $emit('playing', playing.value);
}

async function onLoad(e: HTMLElementEventMap['load']) {
  const target = e.target as HTMLIFrameElement;
  if (!target?.src || !script.value.length) {
    return;
  }

  await apiReady();

  if (playerEl.value) {
    player.value = markRaw(await vimeo.createPlayer(playerEl.value));

    player.value.on('playing', () =>
      onPlayerStateChange(VimeoApiPlayerState.PLAYING)
    );
    player.value.on('pause', () =>
      onPlayerStateChange(VimeoApiPlayerState.PAUSE)
    );
    player.value.on('ended', () =>
      onPlayerStateChange(VimeoApiPlayerState.ENDED)
    );

    await player.value.ready();
    vimeo.play(player.value);

    loading.value = false;
    ready.value = true;

    $emit('ready', {
      iframe: player.value.element,
      player: player.value
    });
  }
}
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */

.player {
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;

  & button {
    display: block;
    width: 100%;
    cursor: pointer;
  }

  .ready & {
    & button {
      visibility: hidden;
      pointer-events: none;
    }
  }

  & iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    border: none;
  }

  .iframe-mode & {
    aspect-ratio: 16 / 9;
  }
}

/*! purgecss end ignore */
</style>
