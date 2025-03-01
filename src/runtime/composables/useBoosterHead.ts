import { logDebug } from '../utils/log';
import { injectHead, useRouter, useRuntimeConfig } from '#imports';
import { ref, watch, nextTick, type Ref } from 'vue';

import type FontCollection from '#booster/classes/FontCollection';
import type { Head } from '@unhead/vue';
import type {
  Link,
  TagUserProperties,
  UserTagConfigWithoutInnerContent
} from '@unhead/schema';
import type { ModulePublicRuntimeConfig } from '../../types';

export interface HeadFontCollector {
  push: (description: HeadFontCollectorDescription) => HeadFontCollectorEntry;
  collection: Ref<FontsCollection>;
}

declare module '../../types' {
  // interface RuntimeConfig {}
  interface BoosterContext {
    head: HeadFontCollector;
  }
}

export interface HeadFontCollectorDescription {
  options: ModulePublicRuntimeConfig;
  fontCollection: FontCollection;
  isCritical: boolean;
}

export type HeadFontCollectorEntry = {
  dispose: () => void;
};

export default function (): HeadFontCollector {
  const head = injectHead();

  const $router = useRouter();

  const {
    public: {
      booster: { debug }
    }
  } = useRuntimeConfig();

  const collection: Ref<FontsCollection> = ref(new FontsCollection());

  let headEntry: HeadFontCollectorEntry;
  watch(
    () => collection.value,
    value => {
      const data = createEntry(value, debug);
      headEntry?.dispose();
      nextTick(() => {
        headEntry = head.push(() => data);
      });
    }
  );

  $router.beforeEach(() => {
    nextTick(() => {
      const items = collection.value.list.filter(item => {
        return !disposeCollections.value.includes(item);
      });
      collection.value = new FontsCollection(items);
      disposeCollections.value = [];
    });
  });

  const disposeCollections: Ref<
    Array<{
      fontCollection: FontCollection;
    }>
  > = ref([]);
  const push = ({
    fontCollection,
    isCritical,
    options
  }: HeadFontCollectorDescription): HeadFontCollectorEntry => {
    if (!collection) {
      throw new Error('pushFontCollection must be called before setupHead');
    }
    const notEmpty = !fontCollection.list.length;
    let value: HeadFontCollectorDescription;
    if (notEmpty) {
      value = { fontCollection, isCritical, options };
      collection.value = new FontsCollection([...collection.value.list, value]);
      value = collection.value.list[collection.value.list.length - 1];
    }
    return {
      dispose: () => notEmpty && disposeCollections.value.push(value)
    };
  };
  return { push, collection };
}

function createEntry(collection: FontsCollection, debug: boolean): Head {
  if (debug) {
    logDebug('Head Font Collections:', collection.toJSON());
  }

  const items = collection.list.filter(
    ({ fontCollection }) => fontCollection.size
  );

  return {
    link:
      import.meta.server || process.env.prerender
        ? (prepareItems(
            items
              .filter(({ fontCollection }) => fontCollection.size)
              .map(({ fontCollection, isCritical }) =>
                fontCollection.getPreloadDescriptions(isCritical)
              )
              .flat()
          ) as Link<UserTagConfigWithoutInnerContent>[])
        : undefined,
    style: prepareItems(
      items
        .map(({ fontCollection, options }) =>
          fontCollection.getStyleDescriptions(options)
        )
        .flat()
    ),
    noscript:
      ((import.meta.server || process.env.prerender) &&
        prepareItems(
          items
            .map(({ fontCollection }) =>
              fontCollection.getNoScriptStyleDescriptions()
            )
            .flat()
        )) ||
      undefined
  };
}

function prepareItems(
  items: (Link<UserTagConfigWithoutInnerContent> | TagUserProperties)[]
) {
  return Array.from(
    new Map(items.map(item => [item.key, { ...item, key: undefined }])).values()
  );
}

class FontsCollection {
  list: HeadFontCollectorDescription[] = [];

  constructor(list: HeadFontCollectorDescription[] = []) {
    this.list = list;
  }

  get size() {
    return this.list.length;
  }

  toJSON() {
    return {
      list: this.list.map(item => ({
        ...item,
        fontCollection: item.fontCollection.toJSON()
      }))
    };
  }
}
