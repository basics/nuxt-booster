<template>
  <div class="preview-container">
    <div class="preview-container__preview">
      <slot name="default" />
    </div>
    <div class="preview-container__info">
      <slot name="title">
        <p>Preview Info</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
.preview-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 50px 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (orientation: landscape) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  & > div {
    flex: 0 0 50%;
  }

  & .preview-container__info {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(32 / 414 * 100vw);

    @media (min-width: 768px) {
      font-size: calc(32 / 768 * 100vw);
    }

    @media (min-width: 1024px) {
      font-size: 32px;
    }

    & p {
      line-height: calc(44 / 32);
      text-align: center;
    }
  }

  & .preview-container__preview {
    background: #eee;

    & > article {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-size: calc(20 / 414 * 100vw);

      @media (min-width: 768px) {
        font-size: calc(20 / 768 * 100vw);
      }

      @media (min-width: 1024px) {
        font-size: 20px;
      }
    }

    & > iframe {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
