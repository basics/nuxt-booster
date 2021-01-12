<template>
  <organism-preview-container>
    <template #default>
      <div>
        <ul>
          <li id="criticalFontAssignSimple" v-font="$getFont('Comic Neue', 400, 'normal')">
            font assign simple
          </li>
          <hr>
          <li id="criticalFontAssignBySingleSelector" v-font="$getFont('Comic Neue', 700, 'normal', {selector: 'strong'})">
            font assign by <strong>single selector</strong>
          </li>
          <li>
            <span
              id="criticalFontAssignByMultipleVariances"
              v-font="[
                $getFont('Comic Neue', 700, 'normal', {selector: 'strong'}),
                $getFont('Comic Neue', 700, 'italic', {selector: 'i'})
              ]"
            >font assign by <strong>multiple</strong> <i>variances</i></span>
          </li>
          <hr>
          <li>
            <span
              id="criticalFontAssignByMultipleSelectors"
              v-font="[
                $getFont('Comic Neue', 400, 'italic', {selector: 'i, em'})
              ]"
            >font assign by <i>multiple</i> <em>selectors</em></span>
          </li>
          <hr>
          <li>
            <span
              id="criticalFontAssignByDeepSelector"
              v-font="[
                $getFont('Comic Neue', 700, 'italic', {selector: 'strong > i'})
              ]"
            >font assign by <strong><i>deep</i></strong> selector</span>
          </li>
        </ul>
      </div>
    </template>
    <template #title>
      <p>Critical - v-font</p>
    </template>
  </organism-preview-container>
</template>

<script>
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: { OrganismPreviewContainer }
}
</script>
