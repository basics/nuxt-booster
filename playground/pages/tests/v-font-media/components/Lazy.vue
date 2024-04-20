<template>
  <preview-container>
    <template #default>
      <ul class="list">
        <li>
          <ul>
            <li>
              Montserrat Alternates - 300 - normal - (orientation: portrait)
            </li>
          </ul>
          <span
            id="lazyFontAssignSimpleByOrientationPortrait"
            v-font="
              $getFont('Montserrat Alternates', 300, 'normal', {
                media: '(orientation: portrait)'
              })
            "
            >font assign simple by portrait</span
          >
        </li>
        <li>
          <ul>
            <li>
              Montserrat Alternates - 300 - italic - (orientation: landscape)
            </li>
          </ul>
          <span
            id="lazyFontAssignSimpleByOrientationLandscape"
            v-font="
              $getFont('Montserrat Alternates', 300, 'italic', {
                media: '(orientation: landscape)'
              })
            "
            >font assign simple by landscape</span
          >
        </li>
        <li>
          <ul>
            <li>Montserrat Alternates - 700 - italic - (max-width: 479px)</li>
          </ul>
          <span
            id="lazyFontAssignSimpleByMax479"
            v-font="
              $getFont('Montserrat Alternates', 700, 'italic', {
                media: '(max-width: 479px)'
              })
            "
            >font assign simple by max 479px</span
          >
        </li>
        <li>
          <ul>
            <li>Montserrat Alternates - 400 - normal - (min-width: 480px)</li>
          </ul>
          <span
            id="lazyFontAssignSimpleBy480"
            v-font="
              $getFont('Montserrat Alternates', 400, 'normal', {
                media: '(min-width: 480px)'
              })
            "
            >font assign simple by 480px</span
          >
        </li>
        <li>
          <ul>
            <li>Montserrat Alternates - 400 - italic - (min-width: 960px)</li>
          </ul>
          <span
            id="lazyFontAssignSimpleBy960"
            v-font="
              $getFont('Montserrat Alternates', 400, 'italic', {
                media: '(min-width: 960px)'
              })
            "
            >font assign simple by 960px</span
          >
        </li>
        <li>
          <ul>
            <li>
              Montserrat Alternates - 700 - normal - strong - (min-width:
              1440px)
            </li>
          </ul>
          <span
            id="lazyFontBySingleSelectorBy1440"
            v-font="
              $getFont('Montserrat Alternates', 700, 'normal', {
                selector: 'strong',
                media: '(min-width: 1440px)'
              })
            "
            >font assign with <strong>selector by 1440px</strong></span
          >
        </li>
      </ul>
    </template>
    <template #title>
      <p>Lazy - v-font with media</p>
    </template>
  </preview-container>
</template>

<script setup>
import PreviewContainer from '@/components/PreviewContainer';
import { useBoosterFonts } from '#imports';
const { $getFont } = useBoosterFonts();
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
    padding-top: calc(10 / 16 * 1em);
    border-top: solid currentColor 1px;
  }

  & ul {
    padding: 0;
    margin: 0;
    font-family: monospace;
    font-size: 10px;

    /* font-style: italic; */
    list-style: none;
  }
}
</style>
