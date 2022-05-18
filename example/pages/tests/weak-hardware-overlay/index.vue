<template>
  <document-section :class="{mounted}" tag="main">
    <div>
      WeakHardwareOverlay
      <speedkit-weak-hardware-overlay />
    </div>
    <speedkit-layer />
  </document-section>
</template>

<script>
import SpeedkitLayer from 'nuxt-speedkit/components/SpeedkitLayer';
import SpeedkitWeakHardwareOverlay from 'nuxt-speedkit/components/WeakHardwareOverlay';

export default {

  components: {
    SpeedkitLayer,
    SpeedkitWeakHardwareOverlay
  },

  layout: 'blank',

  data () {
    return {
      mounted: false
    };
  },

  mounted () {
    this.mounted = true;
  }

};
</script>
