<template>
  <div>
    <nav>
      <NuxtLink to="/"> Index </NuxtLink> |
      <NuxtLink to="/page-1"> Page 1 </NuxtLink> |
      <NuxtLink to="/page-2"> Page 2 </NuxtLink>
    </nav>
    <slot />
    <info-layer v-if="!$config.public.disableInfoLayer" />
  </div>
</template>

<script>
import InfoLayer from '@/components/InfoLayer';

export default { components: { InfoLayer } };
</script>
