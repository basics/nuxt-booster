<template>
  <div class="menu">
    <input id="menu-control" type="checkbox" name="menu-control" :checked="value" @input="onInput">
    <div class="content" aria-label="Menu" :inert="inert">
      <label for="menu-control" />
      <div>
        <div>
          <nav v-for="({headline, links}, index) in lists" :key="index">
            <headline
              v-if="headline"
              tag="span"
              class="headline"
              type="menu"
              :content="headline"
            />
            <link-list :items="links" aria-label="Menu" />
          </nav>
        </div>
      </div>
    </div>
    <label for="menu-control" class="toggle">
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
    value: {
      type: Boolean,
      default: false
    },
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
      withInert: false
    };
  },

  computed: {
    inert () {
      return this.withInert && !this.value;
    }
  },

  watch: {
    value (value) {
      document.documentElement.classList.toggle('js-menu-open', value);
    }
  },

  mounted () {
    this.withInert = true;
    this.$router.afterEach((to, from) => {
      this.$emit('input', false);
    });
  },

  methods: {
    onInput (e) {
      this.$emit('input', e.target.checked);
    }
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
    top: calc(10 / 16 * 1em);
    left: calc(10 / 16 * 1em);
    padding: calc(10 / 16 * 1em);
    cursor: pointer;
    background: rgb(255 255 255 / 40%);
    outline: none;
    transition: background 0.2s linear;

    @media (prefers-color-scheme: dark) {
      background: rgb(0 0 0 / 40%);
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
    font-size: calc(18 / 16 * 1em);
    font-weight: normal;
    text-align: right;
    text-transform: uppercase;
    opacity: 0.4;
  }

  & .headline {
    display: block;
    margin-left: calc(10 / 16 * 1em);
    font-size: calc(18 / 16 * 1em);
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
        padding: calc(20 / 16 * 1em);
        padding-top: calc(50 / 16 * 1em);
        overflow: auto;
        text-align: left;
        background: rgb(255 255 255 / 50%);
        transition: transform 0.2s  ease-in;
        transform: translateX(-100%);

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
      transition-delay: 0.2s;
      transform: translateX(0%);
    }
  }
}

</style>
