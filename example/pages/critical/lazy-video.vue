<template>
  <div>
    <LazyVideo dash="/video/h264.mpd" hls="/video/h264.m3u8" :autoplay="Boolean(true)" />
    <div class="dimension">
      {{ width }} {{ height }}
    </div>
  </div>
</template>

<script>
import { getPhysicalResolution } from 'lazy-resources/utils/viewport'

export default {
  data () {
    return {
    }
  },

  computed: {
    width () {
      if (process.client) {
        return getPhysicalResolution().x
      }
      return ''
    },

    height () {
      if (process.client) {
        return getPhysicalResolution().y
      }
      return ''
    }
  }
}
</script>

<style lang="postcss" scoped>
.dimension {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 32px;
  color: white;
}
</style>
