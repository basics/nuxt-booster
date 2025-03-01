import { useData } from 'vitepress';
import { computed } from 'vue';

export default function useVersion() {
  const { theme, page } = useData();

  const defaultVersion = computed(
    () =>
      theme.value.version.find(
        ({ isDefault }: { isDefault: boolean }) => isDefault
      )?.version
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
            .filter(
              ({ version }: { version: number }) =>
                version !== currentVersion.value
            )
            .map(
              ({
                version,
                isDefault
              }: {
                version: number;
                isDefault: boolean;
              }) => {
                return {
                  text: `v${version}`,
                  link: isDefault ? '/' : `/v${version}/`
                };
              }
            )
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
