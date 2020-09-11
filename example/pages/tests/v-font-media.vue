<template>
  <div>
    <organism-preview-container>
      <template>
        <div>
          <ul>
            <li id="criticalFontAssignSimpleBy480" v-font="$fonts.getFont('Comic Neue', 400, 'normal').byMedia('(min-width: 480px)').isCritical()">
              font assign simple by 480px
            </li>
            <li id="criticalFontAssignSimpleBy960" v-font="$fonts.getFont('Comic Neue', 400, 'normal').byMedia('(min-width: 960px)').isCritical()">
              font assign simple by 960px
            </li>
            <li id="criticalFontBySingleSelectorBy1440" v-font="$fonts.getFont('Comic Neue', 700, 'normal').byMedia('(min-width: 1440px)').addSelector('b').isCritical()">
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
            <li id="lazyFontAssignSimpleBy480" v-font="$fonts.getFont('Lobster Two', 400, 'normal').byMedia('(min-width: 480px)')">
              font assign simple by 480px
            </li>
            <li id="lazyFontAssignSimpleBy960" v-font="$fonts.getFont('Lobster Two', 400, 'normal').byMedia('(min-width: 960px)')">
              font assign simple by 960px
            </li>
            <li id="lazyFontBySingleSelectorBy1440" v-font="$fonts.getFont('Lobster Two', 700, 'normal').byMedia('(min-width: 1440px)').addSelector('b')">
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
