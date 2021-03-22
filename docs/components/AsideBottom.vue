<template>
  <div class="mt-8">
    <ul class="space-y-8">
      <li
        v-for="(items, category) in categories"
        :key="category"
      >
        <h5 v-if="category" class="px-4 mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:px-3 lg:mb-3 lg:text-xs dark:text-gray-100">
          {{ category }}
        </h5>
        <ul>
          <li v-for="(item, index) of items" :key="index">
            <a
              :target="item.target"
              :href="item.url"
              class="relative flex items-center justify-between px-4 py-2 transition duration-200 lg:px-3 lg:rounded-md hover:text-gray-900 dark:hover:text-gray-100"
              :class="{ 'text-primary-500 dark:text-primary-400 hover:text-primary-500 bg-primary-50 dark:bg-primary-900 dark:hover:text-primary-400': item.active }"
            >

              <component :is="item.icon" v-if="item.icon" class="w-5 h-5 mr-2" />
              <span class="flex-1">
                {{ item.menuTitle || item.title }}
              </span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: {
        More: [
          {
            icon: 'IconExternalLink',
            url: 'https://github.com/GrabarzUndPartner/nuxt-speedkit-example',
            title: 'Example',
            target: '_blank'
          }
        ]
      }
    };
  }
};
</script>
