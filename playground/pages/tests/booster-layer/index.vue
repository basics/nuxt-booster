<template>
  <div :class="{ ready }">
    <component-image-text v-bind="imageTextA" />
    <booster-layer :max-idle-duration="0" />
  </div>
</template>

<script setup>
import boosterHydrate from '#booster/hydrate';
import BoosterLayer from '#booster/components/BoosterLayer';

const ready = ref(false);

onMounted(() => (ready.value = true));

const ComponentImageText = boosterHydrate(
  () => import('@/components/modules/ImageText')
);

const imageTextA = {
  headline: 'BoosterLayer Test',
  content:
    '<p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>',
  picture: {
    title: 'BoosterLayer Test',
    sources: [
      {
        src: '/img/image-text-a.jpg',
        sizes: {
          default: '100vw',
          xxs: '100vw',
          xs: '100vw',
          sm: '100vw',
          md: '100vw',
          lg: '100vw',
          xl: '100vw',
          xxl: '100vw'
        }
      }
    ]
  }
};

definePageMeta({
  layout: 'blank'
});
</script>
