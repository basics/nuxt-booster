---
title: WeakHardwareOverlay
---

# {{$frontmatter.title}}

The `WeakHardwareOverlay` is used in components that are affected by the BoosterLayer event `Weak Hardware`. (*Example: Component requires the execution of `mounted` for functionality.*)

::: info
The **performance issue event** occurs when initialization determines that the client is overloaded with execution and the user has confirmed the `#nuxt-booster-button-init-reduced-view` button in the BoosterLayer.

- [Learn more about BoosterLayer interactions)](/components/booster-layer#buttons)

:::

Basically, the overlay is used to make content visible when the `Weak Hardware` has occurred, if this does not occur, the overlay is not visible.

It is recommended to include an interaction element in the overlay that allows the user to switch to the normal state. For this the interaction element must get the Style Class `.nuxt-booster-button-init-app` and reacts on `click` with the initialization of the app.

## Example

Example of defining a custom `WeakHardwareOverlay` component and placing it in a target component that is affected by the `Weak Hardware` event.

### Customize Overlay

::: code-group

````vue[@/components/WeakHardwareOverlay.vue]
<template>
  <booster-weak-hardware-overlay>
    To improve your experience, extensive features have been disabled.<br>
    <button class="nuxt-booster-button-init-app">
     Click here to enable them.
    </button>
  </booster-weak-hardware-overlay>
</template>
<script>
import BoosterWeakHardwareOverlay from 'nuxt-booster/components/WeakHardwareOverlay';
export default {
  components: { BoosterWeakHardwareOverlay }
};
</script>
<style lang="postcss" scoped>
.nuxt-booster-weak-hardware-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 60%);
  backdrop-filter: blur(em(2px));
}
</style>
````

:::

### Usage Overlay

::: code-group

````vue[@/components/Player.vue]
<template>
  <div>
    <div ref="player" />
    <weak-hardware-overlay />
  </div>
</template>
<script>
import WeakHardwareOverlay from '@/components/WeakHardwareOverlay';
export default {
  components: { WeakHardwareOverlay },
  mounted () {
    this.player = new Player(this.$refs.player)
  }
};
</script>
<style lang="postcss" scoped>
.nuxt-booster-performance-issue-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 60%);
  backdrop-filter: blur(2px);
}
</style>
````

:::
