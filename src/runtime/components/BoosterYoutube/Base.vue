<template>
  <div :class="{ ready, playing }">
    <slot name="beforePlayer" />
    <iframe
      v-if="src"
      ref="playerEl"
      :title="title"
      class="player"
      :src="src"
      allow="accelerometer; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      @load="onLoad"
    />
    <default-button @click="onInit">
      <booster-picture class="poster" v-bind="pictureDataset" :title="title" />
      <slot v-if="loading" name="loading-spinner" />
      <slot v-if="!ready && !loading" name="play" />
    </default-button>
    <slot name="afterPlayer" />
  </div>
</template>

<script setup lang="ts">
import { useHead, useBoosterCritical, useBoosterProvide } from '#imports';
import { ref, computed, markRaw, type Ref, onUnmounted, onMounted } from 'vue';
import type { Script } from '@unhead/schema';

import DefaultButton from '../Button.vue';
import { load } from './utils/loader';
import Youtube from './classes/Youtube';
import { isTouchSupported } from '#booster/utils/browser';
import BoosterPicture from '#booster/components/BoosterPicture.vue';
import props from './props';

useBoosterCritical();
const $booster = useBoosterProvide();

const youtube = new Youtube();

const script: Ref<Script[]> = ref([]);
const src: Ref<string | undefined> = ref();
const player: Ref<YT.Player | undefined> = ref();
const playerEl = ref<HTMLElement | null>();
const ready: Ref<boolean> = ref(false);
const loading: Ref<boolean> = ref(false);
const playing: Ref<boolean> = ref(false);
const isTouchDevice: Ref<boolean> = ref(isTouchSupported());

const $props = defineProps(props);

const $emit = defineEmits(['ready', 'playing']);

// setup

onMounted(() => {
  if ($props.autoplay) {
    onInit();
  }
});

onUnmounted(() => {
  if (player.value) {
    youtube.remove(player.value);
  }
});

// head

useHead({
  script: computed(() => {
    return script.value;
  })
});

// computed

const videoId = computed(() => {
  return ($props.url && new URL($props.url).searchParams.get('v')) || undefined;
});
const pictureDataset = computed(() => {
  return {
    formats: $booster.targetFormats,
    title: $props.title,
    sources: $props.posterSources.map(source => ({
      ...source,
      src: source.src || `/youtube/vi/${videoId.value}/maxresdefault.jpg`
    }))
  };
});

// Functions

function onInit() {
  loading.value = true;

  const params = {
    rel: 0,
    enablejsapi: 1,
    autoplay: 0,
    modestbranding: 1,
    showinfo: 0,
    iv_load_policy: 3,
    ...$props.options,
    playsinline: 1,
    mute: Number(isTouchDevice.value) || Number($props.mute)
  };

  src.value =
    `${$props.host}/embed/${videoId.value}?` +
    Object.entries(params)
      .map(([name, value]) => `${name}=${value}`)
      .join('&');
  script.value = [load()];
}

async function onLoad() {
  const ytPlayer = await youtube.createPlayer(playerEl.value as HTMLElement, {
    videoId: videoId.value,
    host: $props.host,
    events: {
      onReady: e => {
        e.target.mute();
        youtube.play(e.target);
        loading.value = false;
        ready.value = true;
        $emit('ready', {
          iframe: e.target.getIframe(),
          player: player
        });
      },
      onStateChange: e =>
        youtube.api && onPlayerStateChange(youtube.api, e.data)
    }
  });
  player.value = markRaw(ytPlayer);
}

function onPlayerStateChange(scopeYT: typeof YT, state: YT.PlayerState) {
  if (state === scopeYT.PlayerState.PLAYING) {
    playing.value = true;
  } else if (
    state === scopeYT.PlayerState.ENDED ||
    state === scopeYT.PlayerState.PAUSED
  ) {
    playing.value = false;
  }
  $emit('playing', playing.value);
}
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */

div {
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;
}

button {
  display: block;
  width: 100%;
  cursor: pointer;

  .ready & {
    visibility: hidden;
    pointer-events: none;
  }
}

.click-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: auto;
}

.player {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: auto;
  background: black;
  border: none;

  & > div {
    position: relative;
    width: min-content;
    height: 100%;
  }

  & svg,
  & img {
    display: block;
    width: auto;
    height: 100%;
  }

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
}

/*! purgecss end ignore */
</style>
