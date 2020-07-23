<template>
  <div>
    <LazyVideo
      dash="/video/h264.mpd"
      hls="/video/h264.m3u8"
      :autoplay="Boolean(true)"
    />
    <div class="dimension">
      {{ width }} {{ height }}
    </div>
  </div>
</template>

<script>
import { resizeObserver } from 'lazy-resources/utils/viewport'

export default {
  data () {
    return {
      width: 0,
      height: 0
    }
  },

  mounted () {
    this.subscriber = resizeObserver.subscribe((resolution) => {
      this.width = resolution.x
      this.height = resolution.y
    })
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
