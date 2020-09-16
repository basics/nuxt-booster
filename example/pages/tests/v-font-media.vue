<template>
  <div>
    <organism-preview-container>
      <template>
        <div>
          <ul>
            <li id="criticalFontAssignSimpleByMax479" v-font="$fonts.getFont('Comic Neue', 700, 'italic').addMedia('(max-width: 479px)').isCritical()">
              font assign simple by max 479px
            </li>
            <li id="criticalFontAssignSimpleBy480" v-font="$fonts.getFont('Comic Neue', 400, 'normal').addMedia('(min-width: 480px)').isCritical()">
              font assign simple by 480px
            </li>
            <li id="criticalFontAssignSimpleBy960" v-font="$fonts.getFont('Comic Neue', 400, 'italic').addMedia('(min-width: 960px)').isCritical()">
              font assign simple by 960px
            </li>
            <li id="criticalFontBySingleSelectorBy1440" v-font="$fonts.getFont('Comic Neue', 700, 'normal').addMedia('(min-width: 1440px)').addSelector('b').isCritical()">
              font assign with <b>selector by 1440px</b>
            </li>
          </ul>
        </div>
      </template>
      <template v-slot:title>
        <p>Critical - v-font with media</p>
      </template>
    </organism-preview-container>
    <organism-preview-container>
      <template>
        <div>
          <ul>
            <li id="lazyFontAssignSimpleByMax479" v-font="$fonts.getFont('Montserrat Alternates', 700, 'italic').addMedia('(max-width: 479px)').isCritical()">
              font assign simple by max 479px
            </li>
            <li id="lazyFontAssignSimpleBy480" v-font="$fonts.getFont('Montserrat Alternates', 400, 'normal').addMedia('(min-width: 480px)')">
              font assign simple by 480px
            </li>
            <li id="lazyFontAssignSimpleBy960" v-font="$fonts.getFont('Montserrat Alternates', 400, 'italic').addMedia('(min-width: 960px)')">
              font assign simple by 960px
            </li>
            <li id="lazyFontBySingleSelectorBy1440" v-font="$fonts.getFont('Montserrat Alternates', 700, 'normal').addMedia('(min-width: 1440px)').addSelector('b')">
              font assign with <b>selector by 1440px</b>
            </li>
          </ul>
        </div>
      </template>
      <template v-slot:title>
        <p>Lazy - v-font with media</p>
      </template>
    </organism-preview-container>
  </div>
</template>
<script>
import OrganismPreviewContainer from '@/components/organisms/PreviewContainer'
export default {
  components: {
    OrganismPreviewContainer
  }
}
</script>
