import { useData } from 'vitepress/dist/client/theme-default/composables/data';
import { computed } from 'vue';

export function useVersion() {
  const { theme, page } = useData();

  const defaultVersion = computed(
    () => theme.value.version.find(({ isDefault }) => isDefault)?.version
  );

  const currentVersion = computed(() =>
    Number(
      (/v(\d+)\/.*/.test(page.value.relativePath) &&
        page.value.relativePath.replace(/v(\d+)\/.*/, '$1')) ||
        defaultVersion.value
    )
  );

  const nav = computed(() => {
    return (
      theme.value.version?.length && [
        {
          text: `v${currentVersion.value}`,
          items: theme.value.version
            .filter(({ version }) => version !== currentVersion.value)
            .map(({ version, isDefault }) => {
              return {
                text: `v${version}`,
                link: isDefault ? '/' : `/v${version}/`
              };
            })
        }
      ]
    );
  });

  return {
    defaultVersion,
    currentVersion,
    nav
  };
}
