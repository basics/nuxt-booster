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
            <p v-font="$fonts.getFont('Lobster Two', 400, 'normal').isCritical()" v-html="content" />
            <p v-font="$fonts.getFont('Lobster Two', 700, 'normal').isCritical()" v-html="content" />
            <p v-font="$fonts.getFont('Lobster Two', 400, 'italic').isCritical()" v-html="content" />
            <p v-font="$fonts.getFont('Lobster Two', 700, 'italic').isCritical()" v-html="content" />
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

export default {
  data () {
    return {
      content: 'This is a basic test with single font variant.'
    }
  }
}
</script>
