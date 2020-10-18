<template>
  <!-- <only-ssr> -->
  <div v-if="isServer" class="speedkit_info_layer">
    <div>
      <slot>
        {{ isServer }}
        <p>Deine Verbindung ist zu langsam…</p>
        <button class="speedkit_info_layer_button">
          OK
        </button>
      </slot>
    </div>
  </div>
  <!-- </only-ssr> -->
</template>

<script>

// import OnlySsr from '../abstracts/OnlySsr'
export default {
  // components: {
  //   OnlySsr
  // },
  data () {
    return {
      isServer: true
    }
  },
  mounted () {
    this.isServer = false
    console.log('isServer', this.isServer)
  }
}
</script>

<style>
.speedkit_info_layer {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #000;
  opacity: 0;
  animation-name: fade-in;
  animation-duration: 0.2s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  backdrop-filter: blur(10px);
}

.speedkit_info_layer > div {
  padding: 10px;
  font-family: sans-serif;
  background: white;
}

@keyframes fade-in {
  100% {
    opacity: 1;
  }
}

</style>
