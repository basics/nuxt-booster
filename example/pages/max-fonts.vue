<template>
  <div>
    <organism-preview-container>
      <template>
        <div>
          <div>
            <p v-font="$fonts.getFont('Comic Neue', 300, 'normal').isCritical()" v-html="content" />
            <p v-font="$fonts.getFont('Comic Neue', 400, 'normal').isCritical()" v-html="content" />
            <p v-font="$fonts.getFont('Comic Neue', 700, 'normal').isCritical()" v-html="content" />
            <p v-font="$fonts.getFont('Comic Neue', 300, 'italic').isCritical()" v-html="content" />
            <p v-font="$fonts.getFont('Comic Neue', 400, 'italic').isCritical()" v-html="content" />
            <p v-font="$fonts.getFont('Comic Neue', 700, 'italic').isCritical()" v-html="content" />
            <p v-font="$fonts.getFont('Montserrat Alternates', 400, 'normal').isCritical()" v-html="content" />
            <p v-font="$fonts.getFont('Montserrat Alternates', 700, 'normal').isCritical()" v-html="content" />
            <p v-font="$fonts.getFont('Montserrat Alternates', 400, 'italic').isCritical()" v-html="content" />
            <p v-font="$fonts.getFont('Montserrat Alternates', 700, 'italic').isCritical()" v-html="content" />
          </div>
        </div>
      </template>
      <template v-slot:title>
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
