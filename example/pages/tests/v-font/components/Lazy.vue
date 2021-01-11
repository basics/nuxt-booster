<template>
  <organism-preview-container>
    <template #default>
      <div>
        <ul>
          <li id="lazyFontAssignSimple" v-font="$fonts.getFont('Montserrat Alternates', 400, 'normal')">
            font assign simple
          </li>
          <hr>
          <li id="lazyFontAssignBySingleSelector" v-font="$fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: 'strong'})">
            font assign by <strong>single selector</strong>
          </li>
          <li>
            <span
              id="lazyFontAssignByMultipleVariances"
              v-font="[
                $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: 'strong'}),
                $fonts.getFont('Montserrat Alternates', 700, 'italic', {selector: 'i'})
              ]"
            >font assign by <strong>multiple</strong> <i>variances</i></span>
          </li>
          <hr>
          <li>
            <span
              id="lazyFontAssignByMultipleSelectors"
              v-font="[
                $fonts.getFont('Montserrat Alternates', 400, 'italic', {selector: 'i, em'})
              ]"
            >font assign by <i>multiple</i> <em>selectors</em></span>
          </li>
          <hr>
          <li>
            <span
              id="lazyFontAssignByDeepSelector"
              v-font="[
                $fonts.getFont('Montserrat Alternates', 700, 'italic', {selector: 'strong > i'})
              ]"
            >font assign by <strong><i>deep</i> selector</strong></span>
          </li>
        </ul>
      </div>
    </template>
    <template #title>
      <p>Lazy - v-font</p>
    </template>
  </organism-preview-container>
</template>

<script>
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: { OrganismPreviewContainer }
}
</script>
