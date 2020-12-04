<template>
  <div>
    <organism-preview-container critical>
      <template>
        <div
          v-font="$fonts.getFont('Quicksand', 400, 'normal')"
          class="wrapper"
        >
          <test-a id="testResolveByIntersectionObserver" title="Resolve by IntersectionObserver" />
          <test-b id="testResolveByName" title="Resolve by name &quot;resolve-components&quot;" />
          <test-c id="testResolveByEvent" title="Resolve by event &quot;click&quot;" />
        </div>
      </template>
      <template v-slot:title>
        <div>
          <p>
            Speedkit-Function<br>Only Initial PageLoad
            <base-button @click="onClick">
              Resolve all Components with name "resolve-components"
            </base-button>
          </p>
        </div>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>
import speedkit, { MODE, resolveComponents } from 'nuxt-speedkit/utils/speedkit'
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'

import BaseButton from '@/components/atoms/BaseButton'

export default {
  components: {
    OrganismPreviewContainer,
    BaseButton,
    TestA: speedkit(() => import('@/components/atoms/SpeedkitTest'), MODE.VISIBLE),
    TestB: speedkit(() => import('@/components/atoms/SpeedkitTest'), MODE.NAME, { name: 'resolve-components' }),
    TestC: speedkit(() => import('@/components/atoms/SpeedkitTest'), MODE.EVENT, { name: 'click' })
  },
  methods: {
    onClick () {
      resolveComponents('resolve-components')
    }
  }
}

</script>
<style lang="postcss" scoped>
.wrapper {
  flex-direction: column;
}
</style>
