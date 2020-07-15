<template>
  <div>
    <organism-preview-container>
      <template>
        <div>
          <ul>
            <li v-font="$fonts.getFont('Comic Neue', 400, 'normal').isCritical()">
              Basic font assign
            </li>
            <hr>
            <li v-font="$fonts.getFont('Comic Neue', 700, 'normal').bySelector('strong').isCritical()">
              font assign by <strong>single selector</strong>
            </li>
            <li>
              <span
                v-font="[
                  $fonts.getFont('Comic Neue', 700, 'normal').bySelector('strong').isCritical(),
                  $fonts.getFont('Comic Neue', 700, 'italic').bySelector('i').isCritical()
                ]"
              >font assign by <strong>multiple</strong> <i>variances</i></span>
            </li>
            <hr>
            <li>
              <span
                v-font="[
                  $fonts.getFont('Comic Neue', 700, 'normal').bySelector('strong, b').isCritical()
                ]"
              >font assign by <strong>multiple</strong> <b>selectors (String)</b></span>
            </li>
            <li>
              <span
                v-font="[
                  $fonts.getFont('Comic Neue', 400, 'italic').bySelector(['i', 'em']).isCritical()
                ]"
              >font assign by <i>multiple</i> <em>selectors (Array)</em></span>
            </li>
            <hr>
            <li>
              <span
                v-font="[
                  $fonts.getFont('Comic Neue', 700, 'italic').bySelector('strong > i').isCritical()
                ]"
              >font assign by <strong><i>deep</i> selector</strong></span>
            </li>
          </ul>
        </div>
      </template>
      <template v-slot:title>
        <p>Critical - v-font</p>
      </template>
    </organism-preview-container>
    <organism-preview-container>
      <template>
        <div>
          <ul>
            <li v-font="$fonts.getFont('Lobster Two', 400, 'normal')">
              Basic font assign
            </li>
            <hr>
            <li v-font="$fonts.getFont('Lobster Two', 700, 'normal').bySelector('strong')">
              font assign by <strong>single selector</strong>
            </li>
            <li>
              <span
                v-font="[
                  $fonts.getFont('Lobster Two', 700, 'normal').bySelector('strong'),
                  $fonts.getFont('Lobster Two', 700, 'italic').bySelector('i')
                ]"
              >font assign by <strong>multiple</strong> <i>variances</i></span>
            </li>
            <hr>
            <li>
              <span
                v-font="[
                  $fonts.getFont('Lobster Two', 700, 'normal').bySelector('strong, b')
                ]"
              >font assign by <strong>multiple</strong> <b>selectors (String)</b></span>
            </li>
            <li>
              <span
                v-font="[
                  $fonts.getFont('Lobster Two', 400, 'italic').bySelector(['i', 'em'])
                ]"
              >font assign by <i>multiple</i> <em>selectors (Array)</em></span>
            </li>
            <hr>
            <li>
              <span
                v-font="[
                  $fonts.getFont('Lobster Two', 700, 'italic').bySelector('strong > i')
                ]"
              >font assign by <strong><i>deep</i> selector</strong></span>
            </li>
          </ul>
        </div>
      </template>
      <template v-slot:title>
        <p>Lazy - v-font</p>
      </template>
    </organism-preview-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
