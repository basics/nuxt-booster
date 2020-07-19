<template>
  <div>
    <LazyVideo
      :landscape="{
        dash: '/video/h264_landscape.mpd',
        hls: '/video/h264_landscape.m3u8'
      }"
      :portrait="{
        dash: '/video/h264_portrait.mpd',
        hls: '/video/h264_portrait.m3u8'
      }"
      :autoplay="Boolean(true)"
    />
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
