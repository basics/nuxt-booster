<template>
  <div class="page-speedkit-picture">
    <component-experimental-stage v-for="(component, index) in components" :key="index" v-bind="component" :critical="index < 1" />
  </div>
</template>

<script>
export default {
  speedkitComponents: {
    ComponentExperimentalStage: () => import('@/components/organisms/experimental/Stage')
  },
  asyncData ({ route }) {
    return {
      components: getComponents(Number(route.params.count) || 1)
    };
  }
};

function getComponents (count = 5) {
  const components = [];
  for (let i = 0; i < count; i++) {
    const background = Array(3).fill(Math.round((255 / count * i)).toString(16)).join('');
    const color = Array(3).fill(Math.round(255 - (255 / count * i)).toString(16)).join('');

    components.push({
      picture: {
        sources: [
          { src: `https://dummyimage.com/1920x1080/${background}/${color}.jpg`, sizes: '1200:1599,1600:1899,1900:1920' },
          { src: `https://dummyimage.com/630x1200/${background}/${color}.jpg`, sizes: '299,300:599,600:899,900:1199' }
        ]
      }
    });
  }
  return components;
}

</script>

<style lang="postcss" scoped>
.page-speedkit-picture {
  font-size: calc(20 / 16 * 1em);

  & > * {
    margin: 25px 0 !important;

    &:first-child {
      margin-top: 0 !important;
    }

    &:last-child {
      margin-bottom: 0 !important;
    }
  }
}

</style>
