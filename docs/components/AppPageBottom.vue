<template>
  <div v-if="link" class="pt-4 pb-4 lg:px-8 flex flex-col sm:flex-row justify-between">
    <a
      :href="link"
      target="_blank"
      rel="noopener"
      class="text-gray-600 dark:text-gray-400 text-sm font-medium hover:underline flex items-center"
    >
      {{ $t('article.github') }}
      <IconExternalLink class="w-4 h-4 ml-1" />
    </a>
    <span class="text-gray-600 dark:text-gray-400 text-sm font-medium flex items-center">
      {{ $t("article.updatedAt") }} {{ $d(Date.parse(document.updatedAt), "long") }}
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { joinURL } from 'ufo';

export default {
  props: {
    document: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'settings',
      'githubUrls'
    ]),
    link () {
      console.log(this.settings);
      if (!this.settings.github) {
        return;
      }

      return joinURL(
        this.githubUrls.repo,
        'edit',
        this.settings.defaultBranch,
        this.settings.defaultDir,
        'content',
        `v${this.settings.releaseMajorVersion}`,
        `${this.document.path}${this.document.extension}`);
    }
  }
};
</script>
