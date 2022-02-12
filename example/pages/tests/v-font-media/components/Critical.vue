<template>
  <organism-preview-container>
    <template #default>
      <div>
        <ul>
          <li>
            <ul>
              <li>Merriweather - 700 - italic - (max-width: 479px)</li>
            </ul>
            <span id="criticalFontAssignSimpleByMax479" v-font="$getFont('Merriweather', 700, 'italic', {media: '(max-width: 479px)'})">font assign simple by max 479px</span>
          </li>
          <li>
            <ul>
              <li>Merriweather - 400 - normal - (min-width: 480px)</li>
            </ul>
            <span id="criticalFontAssignSimpleBy480" v-font="$getFont('Merriweather', 400, 'normal', {media: '(min-width: 480px)'})">font assign simple by 480px</span>
          </li>
          <li>
            <ul>
              <li>Merriweather - 400 - italic - (min-width: 960px)</li>
            </ul>
            <span id="criticalFontAssignSimpleBy960" v-font="$getFont('Merriweather', 400, 'italic', {media: '(min-width: 960px)'})">font assign simple by 960px</span>
          </li>
          <li>
            <ul>
              <li>Merriweather - 700 - normal - strong - (min-width: 1440px)</li>
            </ul>
            <span id="criticalFontBySingleSelectorBy1440" v-font="$getFont('Merriweather', 700, 'normal', {selector: 'strong', media: '(min-width: 1440px)'})">font assign with <strong>selector by 1440px</strong></span>
          </li>
        </ul>
      </div>
    </template>
    <template #title>
      <p>Critical - v-font with media</p>
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
