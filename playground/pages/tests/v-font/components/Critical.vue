<template>
  <organism-preview-container>
    <template #default>
      <ul class="list">
        <li>
          <ul>
            <li>Merriweather - 400 - normal</li>
          </ul>
          <span
            id="criticalFontAssignSimple"
            v-font="$getFont('Merriweather', 400, 'normal')"
            >font assign simple</span
          >
        </li>
        <li>
          <ul>
            <li>Merriweather - 700 - normal - strong</li>
          </ul>
          <span
            id="criticalFontAssignBySingleSelector"
            v-font="
              $getFont('Merriweather', 700, 'normal', { selector: 'strong' })
            "
            >font assign by <strong>single selector</strong></span
          >
        </li>
        <li>
          <ul>
            <li>Merriweather - 700 - normal - strong</li>
            <li>Merriweather - 400 - italic - em</li>
          </ul>
          <span
            id="criticalFontAssignByMultipleVariances"
            v-font="[
              $getFont('Merriweather', 700, 'normal', { selector: 'strong' }),
              $getFont('Merriweather', 400, 'italic', { selector: 'em' })
            ]"
          >
            font assign by <strong>multiple</strong> <em>variances</em></span
          >
        </li>
        <li>
          <ul>
            <li>Merriweather - 400 - italic - em, span</li>
          </ul>
          <span
            id="criticalFontAssignByMultipleSelectors"
            v-font="
              $getFont('Merriweather', 400, 'italic', { selector: 'em, span' })
            "
            >font assign by <em>multiple</em> <span>selectors</span></span
          >
        </li>
        <li>
          <ul>
            <li>Merriweather - 700 - italic - strong > em</li>
          </ul>
          <span
            id="criticalFontAssignByDeepSelector"
            v-font="
              $getFont('Merriweather', 700, 'italic', {
                selector: 'strong > em'
              })
            "
            >font assign by <strong><em>deep</em></strong> selector</span
          >
        </li>
      </ul>
    </template>
    <template #title>
      <p>Critical - v-font</p>
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
.preview-container {
  @media (width <= 767px) {
    & :deep(.preview) {
      height: 70vh;
    }

    & :deep(.info) {
      height: 30vh;
    }
  }
}

div > ul {
  & > li + li {
    padding-top: em(10);
    border-top: solid currentColor em(1px);
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
