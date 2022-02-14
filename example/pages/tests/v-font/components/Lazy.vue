<template>
  <organism-preview-container>
    <template #default>
      <div>
        <ul>
          <li>
            <ul>
              <li>Montserrat Alternates - 400 - normal</li>
            </ul>
            <span id="lazyFontAssignSimple" v-font="$getFont('Montserrat Alternates', 400, 'normal')">font assign simple</span>
          </li>
          <hr>
          <li>
            <ul>
              <li>Montserrat Alternates - 700 - normal</li>
            </ul>
            <span id="lazyFontAssignBySingleSelector" v-font="$getFont('Montserrat Alternates', 700, 'normal', {selector: 'strong'})">font assign by <strong>single selector</strong></span>
          </li>
          <li>
            <ul>
              <li>Montserrat Alternates - 700 - normal - strong</li>
              <li>Montserrat Alternates - 400 - italic - em</li>
            </ul>
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
            <ul>
              <li>Montserrat Alternates - 400 - italic - em, span</li>
            </ul>
            <span
              id="lazyFontAssignByMultipleSelectors"
              v-font="$getFont('Montserrat Alternates', 400, 'italic', {selector: 'em, span'})"
            >font assign by <em>multiple</em> <span>selectors</span></span>
          </li>
          <hr>
          <li>
            <ul>
              <li>Montserrat Alternates - 700 - italic - strong > em</li>
            </ul>
            <span
              id="lazyFontAssignByDeepSelector"
              v-font="$getFont('Montserrat Alternates', 700, 'italic', {selector: 'strong > em'})"
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

<style lang="postcss" scoped>
div > ul {
  & > li + li {
    border-top: solid currentColor 1px;
  }

  & ul {
    padding: 0;
    margin: 0;
    font-family: monospace;
    font-size: 11px;

    /* font-style: italic; */
    list-style: none;
  }
}
</style>
