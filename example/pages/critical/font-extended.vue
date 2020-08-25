<template>
  <div>
    <organism-preview-container>
      <template>
        <article
          v-font="[
            $fonts.getFont('Comic Neue', 400, 'normal').isCritical(),
            $fonts.getFont('Comic Neue', 700, 'normal').addSelector('b, strong').isCritical(),
            $fonts.getFont('Comic Neue', 400, 'italic').addSelector('i, em').isCritical()
          ]"
          v-html="contentA"
        />
      </template>
      <template v-slot:title>
        <p>Critical<br>Font extended usage</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      contentA: '<p>This is a <strong>Rich</strong><b>Text</b> with different <i>font</i> <em>variants</em>.</p>'
    }
  }
}
</script>
