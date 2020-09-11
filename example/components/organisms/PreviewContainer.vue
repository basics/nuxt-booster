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

<style lang="postcss" scoped>
.preview-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: stretch;
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

  @media (min-width: 992px) {
    flex-direction: row;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 50vh;

    @media (orientation: landscape) {
      width: 50vw;
      height: 100vh;
    }

    @media (min-width: 992px) {
      width: 50vw;
      height: 100vh;
    }
  }

  & .preview-container__info {
    font-size: calc(32 / 16 * 1em);

    & p {
      line-height: calc(44 / 32);
      text-align: center;
    }
  }

  & .preview-container__preview {
    font-size: calc(18 / 16 * 1em);
    background: #eee;

    & > article {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    & > div {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;

      & > ul {
        padding: 0;
        margin: 0;
        list-style: none;

        & li {
          margin: calc(10 / 16 * 1em) 0;
        }
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
