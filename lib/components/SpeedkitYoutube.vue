<template>
  <base-youtube class="nuxt-speedkit-youtube" v-bind="$attrs" v-on="$listeners">
    <template #loading-spinner>
      <slot name="loading-spinner">
        <svg class="loader loading-spinner" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="32"
            cy="32"
            r="29"
            fill="transparent"
            stroke="#ddd"
            stroke-width="2"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 32 32"
              to="360 32 32"
              begin="0s"
              dur="1.555s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </slot>
    </template>
    <template #play>
      <slot name="play">
        <svg class="play" version="1.1" viewBox="0 0 68 48">
          <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00" />
          <path d="M 45,24 27,14 27,34" fill="#fff" />
        </svg>
      </slot>
    </template>
  </base-youtube>
</template>

<script>

import BaseYoutube from 'nuxt-speedkit/components/SpeedkitYoutube/Base';

export default {
  components: {
    BaseYoutube
  },

  inheritAttrs: false
};
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */

.loading-spinner {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 64px;
  margin: auto;

  & circle {
    stroke-dasharray: 5, 177;
    stroke-width: 6px;
    animation: stroke 1.3333s ease infinite;
  }
}

:deep(button) {
  --color-background: #212121;
  --color-foreground: #fff;
  --transition-duration: 0.1s;

  &:hover,
  &:focus {
    --color-background: #f00;
    --color-foreground: #fff;
    --transition-duration: 0.2s;
  }
}

.play {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 68px;
  margin: auto;
  pointer-events: none;

  & path {
    transition: fill var(--transition-duration) cubic-bezier(0.4, 0, 1, 1), fill-opacity var(--transition-duration) cubic-bezier(0.4, 0, 1, 1);

    &:first-child {
      fill: var(--color-background);
      fill-opacity: 0.8;
    }

    &:last-child {
      fill: var(--color-foreground);
    }
  }
}

@keyframes stroke {
  50% {
    stroke-dasharray: 137, 45;
    stroke-dashoffset: 0;
  }

  100% { stroke-dashoffset: -182; }
}

@keyframes hue {
  100% { filter: hue-rotate(360deg); }
}

/*! purgecss end ignore */
</style>
