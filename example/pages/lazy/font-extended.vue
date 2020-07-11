<template>
  <div>
    <organism-spacer />
    <organism-preview-container>
      <template>
        <article
          v-font="[
            $fonts.getFont('Comic Neue', 400, 'normal'),
            $fonts.getFont('Comic Neue', 700, 'normal').bySelector('b, strong'),
            $fonts.getFont('Comic Neue', 400, 'italic').bySelector('i, em')
          ]"
          v-html="contentA"
        />
      </template>
      <template v-slot:title>
        <p>Font extended usage</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      contentA: '<p>This is a <strong>RichText</strong> with different <i>font variants</i>.</p>'
    }
  }
}
</script>
