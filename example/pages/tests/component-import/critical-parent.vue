<template>
  <div>
    <organism-preview-container id="criticalContainer" critical>
      <template #default>
        <div>
          <component-text-a v-bind="textA" />
        </div>
      </template>
      <template #title>
        <p>Critical - Critical (Parent)</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';
export default {
  components: {
    OrganismPreviewContainer
  },
  speedkitComponents: {
    ComponentTextA: () => import('@/components/organisms/TextFontA')
  },
  data () {
    return {
      textA: {
        text: '<h2>Text Headline</h2><p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p>'
      }
    };
  }
};
</script>
