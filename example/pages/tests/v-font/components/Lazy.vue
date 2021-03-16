<template>
  <organism-preview-container>
    <template #default>
      <div>
        <ul>
          <li id="lazyFontAssignSimple" v-font="$getFont('Montserrat Alternates', 400, 'normal')">
            font assign simple
          </li>
          <hr>
          <li id="lazyFontAssignBySingleSelector" v-font="$getFont('Montserrat Alternates', 700, 'normal', {selector: 'strong'})">
            font assign by <strong>single selector</strong>
          </li>
          <li>
            <span
              id="lazyFontAssignByMultipleVariances"
              v-font="[
                $getFont('Montserrat Alternates', 700, 'normal', {selector: 'strong'}),
                $getFont('Montserrat Alternates', 400, 'italic', {selector: 'em'})
              ]"
            >font assign by <strong>multiple</strong> <em>variances</em></span>
          </li>
          <hr>
          <li>
            <span
              id="lazyFontAssignByMultipleSelectors"
              v-font="[
                $getFont('Montserrat Alternates', 400, 'italic', {selector: 'em, span'})
              ]"
            >font assign by <em>multiple</em> <span>selectors</span></span>
          </li>
          <hr>
          <li>
            <span
              id="lazyFontAssignByDeepSelector"
              v-font="[
                $getFont('Montserrat Alternates', 700, 'italic', {selector: 'strong > em'})
              ]"
            >font assign by <strong><em>deep</em></strong> selector</span>
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
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer';
export default {
  components: { OrganismPreviewContainer }
};
</script>
