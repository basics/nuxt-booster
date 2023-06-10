<template>
  <section class="preview-container">
    <div class="preview">
      <div>
        <slot name="default" />
      </div>
    </div>
    <h2 class="info">
      <span v-font="$getFont('Quicksand', 400, 'normal')">
        <slot name="title">
          <p>Preview Info</p>
        </slot>
      </span>
    </h2>
  </section>
</template>

<script setup>
import useFonts from '#speedkit/composables/fonts';
const { $getFont } = useFonts();
</script>

<style lang="postcss" scoped>
.preview-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: stretch;
  margin: em(50px) 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (orientation: landscape) {
    flex-direction: row;
  }

  @media (width >= 992px) {
    flex-direction: row;
  }

  & > .preview,
  & > .info {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50vh;
    margin: 0;
    overflow: hidden;

    @media (orientation: landscape) {
      width: 50vw;
      height: 100vh;
    }

    @media (width >= 992px) {
      width: 50vw;
      height: 100vh;
    }
  }

  & .info {
    font-size: em(32px);

    & p {
      line-height: calc(44 / 32);
      text-align: center;
    }

    & button {
      width: 90%;
      margin: 0 auto;
    }
  }

  & .preview {
    font-size: em(18px);

    --bg-opacity: 1;

    background-color: rgb(0 0 0 / 40%);

    @media (prefers-color-scheme: dark) {
      background-color: rgb(255 255 255 / 40%);
    }

    & img,
    & :deep(img, picture img) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    & :deep(picture) {
      width: 100%;
      height: 100%;
    }

    & > article {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      text-align: center;
    }

    & > div {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;

      & :deep(.list) {
        padding: 0;
        margin: 0;
        list-style: none;

        & > * {
          margin: em(10px) 0;
        }
      }

      & :deep(.test-iframe) {
        position: relative;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
