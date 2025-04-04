<template>
  <div class="menu">
    <input
      id="menuControl"
      type="checkbox"
      name="menuControl"
      :checked="modelValue"
      @input="onInput"
    />
    <div class="content" aria-label="Menu" :inert="inert">
      <label
        id="menuButton"
        for="menuControl"
        :aria-label="`${modelValue ? 'Open' : 'Close'} Menu`"
      />
      <div>
        <div>
          <nav>
            <div v-for="({ headline, links }, index) in lists" :key="index">
              <base-headline
                v-if="headline"
                tag="span"
                class="headline"
                type="menu"
                :content="headline"
              />
              <base-link-list :items="links" aria-label="Menu" />
            </div>
          </nav>
        </div>
      </div>
    </div>
    <label for="menuControl" class="toggle" aria-labelledby="menuButton">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <g id="open">
          <g>
            <path d="M0 10h120v16.67H0z" />
            <path d="M0 93.33h120V110H0z" />
          </g>
        </g>
        <g id="close">
          <path d="M0 51.67h120v16.67H0z" />
          <path d="M0 51.67h120v16.67H0z" />
        </g>
      </svg>
    </label>
  </div>
</template>

<script setup lang="ts">
import BaseHeadline from '@/components/base/Headline.vue';
import BaseLinkList from '@/components/base/LinkList.vue';
import { useRoute } from 'vue-router';
import { ref, computed, watch, onMounted } from 'vue';
import type { LinkProps } from '@/types';

export type List = {
  headline: string;
  links: LinkProps[];
};

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  lists: {
    type: Array<List>,
    default() {
      return [
        {
          headline: 'Preview',
          links: [
            {
              title: 'Item',
              to: '/'
            }
          ]
        }
      ];
    }
  }
});

const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});

const inert = computed(() => mounted.value && !props.modelValue);
const emit = defineEmits(['update:modelValue']);

const route = useRoute();

watch(
  () => props.modelValue,
  modelValue =>
    document.documentElement.classList.toggle('js-menu-open', modelValue)
);

watch(
  () => route.path,
  () => emit('update:modelValue', false),
  { deep: true, immediate: true }
);

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement | null;
  if (target) {
    emit('update:modelValue', target.checked);
  }
};
</script>

<style lang="postcss">
html.js-menu-open {
  overflow: hidden;
}
</style>

<style lang="postcss" scoped>
.menu {
  color: black;

  @media (prefers-color-scheme: dark) {
    color: #fff;
  }

  & .toggle {
    position: absolute;
    top: em(10px);
    left: em(10px);
    padding: em(10px);
    cursor: pointer;
    outline: none;
    background: rgb(255 255 255 / 40%);
    transition: background 0.2s linear;

    @media (prefers-color-scheme: dark) {
      background: rgb(0 0 0 / 40%);
    }

    & svg {
      display: block;
      width: em(30px);
    }

    & path {
      fill: #333;
      transform-origin: center;
      transition:
        opacity 0.2s linear,
        transform 0.2s linear;

      @media (prefers-color-scheme: dark) {
        fill: #fff;
      }
    }

    & #close {
      & path:nth-child(1),
      & path:nth-child(2) {
        transform: rotate(0deg);
      }
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        & #open {
          & path {
            opacity: 0.6;
          }

          & path:nth-child(1) {
            transform: translateY(-4%);
          }

          & path:nth-child(2) {
            transform: translateY(4%);
          }
        }

        & #close {
          & path:nth-child(1) {
            transform: rotate(15deg);
          }

          & path:nth-child(2) {
            transform: rotate(-15deg);
          }
        }
      }
    }
  }

  & input:checked ~ .toggle {
    background: transparent;

    & #open {
      & path {
        opacity: 0;
      }

      & path:nth-child(1) {
        transform: translateY(-10%);
      }

      & path:nth-child(2) {
        transform: translateY(10%);
      }
    }

    & #close {
      & path:nth-child(1) {
        transform: rotate(45deg);
      }

      & path:nth-child(2) {
        transform: rotate(-45deg);
      }
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        & #open {
          & path {
            opacity: 0.2;
          }

          & path:nth-child(1) {
            transform: translateY(-8%);
          }

          & path:nth-child(2) {
            transform: translateY(8%);
          }
        }

        & #close {
          & path:nth-child(1) {
            transform: rotate(30deg);
          }

          & path:nth-child(2) {
            transform: rotate(-30deg);
          }
        }
      }
    }
  }

  & input:focus ~ .toggle {
    & #open {
      & path {
        opacity: 0.6;
      }

      & path:nth-child(1) {
        transform: translateY(-4%);
      }

      & path:nth-child(2) {
        transform: translateY(4%);
      }
    }

    & #close {
      & path:nth-child(1) {
        transform: rotate(15deg);
      }

      & path:nth-child(2) {
        transform: rotate(-15deg);
      }
    }
  }

  & .title {
    display: block;
    font-size: em(18px);
    font-weight: normal;
    text-align: right;
    text-transform: uppercase;
    opacity: 0.4;
  }

  & .headline {
    display: block;
    margin-left: em(10px);
    font-size: em(18px);
    color: #333;

    @media (prefers-color-scheme: dark) {
      color: rgb(255 255 255 / 80%);
    }
  }

  & .menu-button {
    position: absolute;
    top: 0;
    padding: 0;
  }

  & .content {
    position: fixed;
    top: 0;

    & > label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    width: 100%;
    height: 100%;
    pointer-events: none;
    transition: background 0.2s 0.2s ease-in;

    & > div {
      display: flex;
      height: 100%;

      & > div {
        padding: em(20px);
        padding-top: em(50px);
        overflow: auto;
        text-align: left;
        background: rgb(255 255 255 / 50%);
        transform: translateX(-100%);
        transition: transform 0.2s ease-in;

        @media (prefers-color-scheme: dark) {
          background: rgb(0 0 0 / 50%);
        }
      }
    }
  }

  & input {
    position: fixed;
    top: 0;
    left: 0;
    appearance: none;
    opacity: 0;
  }

  & input:checked + .content {
    display: block;
    pointer-events: auto;
    background: rgb(0 0 0 / 40%);
    transition-delay: 0s;

    & > div > div {
      transform: translateX(0%);
      transition-delay: 0.2s;
    }
  }
}
</style>
