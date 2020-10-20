<template>
  <speedkit-layer class="info_layer">
    <div>
      <p>Your connection is too slow…</p>
      <button class="info_layer__button speedkit_layer__button">
        Anyway (OK)
      </button>
    </div>
  </speedkit-layer>
</template>

<script>

import SpeedkitLayer from 'lazy-resources/components/SpeedkitLayer'
export default {
  components: {
    SpeedkitLayer
  }
}
</script>

<style lang="postcss">
.info_layer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  opacity: 0;
  animation-name: fade-in;
  animation-duration: 0.2s;
  animation-delay: 0.5s;
  backdrop-filter: blur(7px);
  animation-fill-mode: forwards;

  & > div {
    padding: 10px;
    font-family: sans-serif;
    font-weight: bold;
    color: #f5f7fa;
    text-align: center;
    background-color: #2c3e50;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
    transform: translateY(-50%);
    animation-name: fall-down;
    animation-duration: 0.2s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;

    @media (prefers-color-scheme: dark) {
      color: #2f495e;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    }
  }
}

@keyframes fade-in {
  100% {
    opacity: 1;
  }
}

@keyframes fall-down {
  100% {
    transform: translateY(0%);
  }
}

</style>
