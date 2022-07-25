<template>
  <base-vimeo
    class="nuxt-speedkit-vimeo"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #loading-spinner>
      <slot name="loading-spinner">
        <div
          class="loading-spinner"
        >
          <svg
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fff"
          >
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)" stroke-width="2">
                <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </g>
          </svg>
        </div>
      </slot>
    </template>
    <template #play>
      <slot name="play">
        <div class="play">
          <span>
            <svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" focusable="false">
              <polygon class="fill" points="1,0 20,10 1,20" />
            </svg>
          </span>
        </div>
      </slot>
    </template>
    <template #default="context">
      <slot name="default" v-bind="context" />
    </template>
  </base-vimeo>
</template>

<script>
import BaseVimeo from 'nuxt-speedkit/components/SpeedkitVimeo/Base';

export default {
  components: {
    BaseVimeo
  },

  inheritAttrs: false
};
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */

.loading-spinner,
.play {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0 0 0 / 20%);
}

.loading-spinner {
  & svg {
    display: block;
    width: 64px;
  }
}

:deep(button) {
  --color-background: rgb(30 30 30 / 70%);
  --color-foreground: #fff;
  --transition-duration: 0.1s;

  &:hover,
  &:focus {
    --color-background: rgb(30 30 30 / 90%);
    --color-foreground: rgb(0 173 239);
    --transition-duration: 0.2s;
  }
}

.play {
  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.5em;
    height: 4em;
    color: var(--color-foreground);
    background: var(--color-background);
    border-radius: 0.5em;
    transition: opacity var(--transition-duration), background-color var(--transition-duration), color var(--transition-duration);
    transform: translate(-50%, -50%);

    & svg {
      display: block;
      width: 2em;
      height: 2em;
      fill: currentColor;
    }
  }
}

/*! purgecss end ignore */
</style>
