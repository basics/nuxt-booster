<template>
  <div>
    <organism-preview-container>
      <template #default>
        <div>
          <div>
            <p v-font="$getFont('Comic Neue', 300, 'normal')" v-html="content" />
            <p v-font="$getFont('Comic Neue', 400, 'normal')" v-html="content" />
            <p v-font="$getFont('Comic Neue', 700, 'normal')" v-html="content" />
            <p v-font="$getFont('Comic Neue', 300, 'italic')" v-html="content" />
            <p v-font="$getFont('Comic Neue', 400, 'italic')" v-html="content" />
            <p v-font="$getFont('Comic Neue', 700, 'italic')" v-html="content" />
            <p v-font="$getFont('Montserrat Alternates', 400, 'normal')" v-html="content" />
            <p v-font="$getFont('Montserrat Alternates', 700, 'normal')" v-html="content" />
            <p v-font="$getFont('Montserrat Alternates', 400, 'italic')" v-html="content" />
            <p v-font="$getFont('Montserrat Alternates', 700, 'italic')" v-html="content" />
          </div>
        </div>
      </template>
      <template #title>
        <p>Max Fonts</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    OrganismPreviewContainer
  },
  data () {
    return {
      content: 'This is a basic test with single font variant.'
    }
  }
}
</script>
