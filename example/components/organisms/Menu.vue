<template>
  <div class="menu">
    <atom-base-button class="menu-button">
      <label for="menu-control">
        Menu
      </label>
    </atom-base-button>
    <input id="menu-control" type="checkbox" name="menu-control">
    <nav>
      <atom-base-button class="menu-button">
        <label for="menu-control">
          Close
        </label>
      </atom-base-button>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import AtomBaseButton from '@/components/atoms/BaseButton';

export default {
  components: {
    AtomBaseButton
  }
};
</script>

<style lang="postcss" scoped>
.menu {
  & .menu-button {
    padding: 0;
  }

  & nav {
    position: fixed;
    top: 0;
    display: none;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
  }

  & input {
    display: none;
  }

  & input:checked + nav {
    display: block;
  }
}
</style>
