<template>
  <div class="menu">
    <input id="menu-control" v-model="open" type="checkbox" name="menu-control">
    <div class="menu__content" aria-label="Menu">
      <label for="menu-control" />
      <div>
        <div>
          <nav v-for="({headline, links}, index) in lists" :key="index">
            <headline
              v-if="headline"
              tag="span"
              class="menu__headline"
              type="menu"
              :content="headline"
            />
            <link-list :items="links" aria-label="Menu" />
          </nav>
        </div>
      </div>
    </div>
    <label for="menu-control" class="menu__toggle">
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

<script>
import Headline from '@/components/atoms/Headline';
import LinkList from '@/components/molecules/LinkList';
export default {
  components: {
    Headline,
    LinkList
  },

  props: {
    lists: {
      type: Array,
      default () {
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
  },

  data () {
    return {
      open: false
    };
  },

  watch: {
    open (value) {
      document.documentElement.classList.toggle('js--menu-open', value);
    }
  },

  mounted () {
    this.$router.afterEach((to, from) => {
      this.open = false;
    });
  }

};
</script>

<style lang="postcss">

/* stylelint-disable no-descending-specificity */

html.js--menu-open {
  overflow: hidden;
}
</style>

<style lang="postcss" scoped>

.menu {
  color: black;

  @media (prefers-color-scheme: dark) {
    color: #fff;
  }

  & .menu__toggle {
    position: absolute;
    top: calc(10 / 16 * 1em);
    left: calc(10 / 16 * 1em);
    padding: calc(10 / 16 * 1em);
    cursor: pointer;
    background: rgba(255, 255, 255, 0.4);
    outline: none;
    transition: background 0.2s linear;

    @media (prefers-color-scheme: dark) {
      background: rgba(0, 0, 0, 0.4);
    }

    & svg {
      display: block;
      width: calc(30 / 16 * 1em);
    }

    & path {
      fill: #333;
      transition: opacity 0.2s linear, transform 0.2s linear;
      transform-origin: center;

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

  & input:checked ~ .menu__toggle {
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

  & .menu__title {
    display: block;
    font-size: calc(18 / 16 * 1em);
    font-weight: normal;
    text-align: right;
    text-transform: uppercase;
    opacity: 0.4;
  }

  & .menu__headline {
    display: block;
    margin-left: calc(10 / 16 * 1em);
    font-size: calc(18 / 16 * 1em);
    color: #333;

    @media (prefers-color-scheme: dark) {
      color: rgba(255, 255, 255, 0.8);
    }
  }

  & .menu-button {
    position: absolute;
    top: 0;
    padding: 0;
  }

  & .menu__content {
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
    transition: backdrop-filter 0.2s 0.2s ease-in;
    backdrop-filter: none;

    & > div {
      display: flex;
      height: 100%;

      & > div {
        padding: calc(20 / 16 * 1em);
        padding-top: calc(50 / 16 * 1em);
        overflow: auto;
        text-align: left;
        background: rgba(255, 255, 255, 0.5);
        transition: transform 0.2s  ease-in;
        transform: translateX(-100%);

        @media (prefers-color-scheme: dark) {
          background: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  & input {
    display: none;
  }

  & input:checked + .menu__content {
    display: block;
    pointer-events: auto;
    transition-delay: 0s;
    backdrop-filter: blur(10px);

    & > div > div {
      transition-delay: 0.2s;
      transform: translateX(0%);
    }
  }
}
/* stylelint-enable no-descending-specificity */

</style>
