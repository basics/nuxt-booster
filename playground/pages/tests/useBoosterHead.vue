<template>
  <div class="test-transition">
    <div class="links">
      <nuxt-link v-for="link in links" :key="link.title" v-bind="link">
        {{ link.title }}
      </nuxt-link>
    </div>
    <div>
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
const {
  public: { isTest }
} = useRuntimeConfig();

const links = ref(
  [
    {
      to: '/useBoosterHead',
      title: 'Transition 1'
    },
    {
      to: '/useBoosterHead/1',
      title: 'Transition 2'
    },
    {
      to: '/useBoosterHead/2',
      title: 'Transition 3'
    },
    {
      class: 'link-empty-1',
      to: '/useBoosterHead/empty-1',
      title: 'Empty 1'
    },
    {
      class: 'link-empty-2',
      to: '/useBoosterHead/empty-2',
      title: 'Empty 2'
    }
  ].map(link => ({
    ...link,
    to: isTest ? link.to : `/tests${link.to}`
  }))
);

definePageMeta({
  layout: 'blank'
});
</script>

<style lang="postcss" scoped>
.links {
  display: flex;
  gap: 1em;
}
</style>
