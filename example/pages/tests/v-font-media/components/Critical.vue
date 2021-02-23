<template>
  <organism-preview-container>
    <template #default>
      <div>
        <ul>
          <li id="criticalFontAssignSimpleByMax479" v-font="$getFont('Merriweather', 700, 'italic', {media: '(max-width: 479px)'})">
            font assign simple by max 479px
          </li>
          <li id="criticalFontAssignSimpleBy480" v-font="$getFont('Merriweather', 400, 'normal', {media: '(min-width: 480px)'})">
            font assign simple by 480px
          </li>
          <li id="criticalFontAssignSimpleBy960" v-font="$getFont('Merriweather', 400, 'italic', {media: '(min-width: 960px)'})">
            font assign simple by 960px
          </li>
          <li id="criticalFontBySingleSelectorBy1440" v-font="$getFont('Merriweather', 700, 'normal', {selector: 'strong', media: '(min-width: 1440px)'})">
            font assign with <strong>selector by 1440px</strong>
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
