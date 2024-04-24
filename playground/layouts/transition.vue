<template>
  <div>
    <slot />
  </div>
</template>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
  transition: all 0.8s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
