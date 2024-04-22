import { logDebug } from '../utils/log';

export default function () {
  const head = injectHead();
  const nuxtApp = useNuxtApp();

  const { debug } = useRuntimeConfig().public.booster;
  const collection = ref(new FontsCollection());

  let headEntry;
  watch(
    () => collection.value,
    () => {
      if (headEntry) {
        headEntry.patch(createEntry(collection, debug));
      } else {
        headEntry = head.push({});
      }
    }
  );

  nuxtApp.$router.afterEach(() => {
    nextTick(() => {
      collection.value = new FontsCollection(
        collection.value.list.filter(item => {
          return !disposeCollections.includes(item);
        })
      );
      disposeCollections = [];
    });
  });

  let disposeCollections = [];
  const push = (fontCollection, isCritical, options) => {
    if (!collection) {
      throw new Error('pushFontCollection must be called before setupHead');
    }
    let value = { fontCollection, isCritical, options };
    collection.value = new FontsCollection([...collection.value.list, value]);
    value = collection.value.list[collection.value.list.length - 1];
    return {
      dispose: () => disposeCollections.push(value)
    };
  };
  return { push, collection };
}

const createEntry = (collection, debug) => {
  return () => {
    if (debug) {
      logDebug('Head Font Collections:', collection.value.toJSON());
    }

    const items = collection.value.list.filter(
      ({ fontCollection }) => fontCollection.size
    );

    const uniqList = items =>
      Array.from(new Map(items.map(item => [item.key, item])).values());

    return {
      link: uniqList(
        items
          .filter(({ fontCollection }) => fontCollection.size)
          .map(({ fontCollection, isCritical }) =>
            fontCollection.getPreloadDescriptions(isCritical)
          )
          .flat()
      ),
      style: uniqList(
        items
          .map(({ fontCollection, options }) =>
            fontCollection.getStyleDescriptions(options)
          )
          .flat()
      ),
      noscript: uniqList(
        items
          .map(({ fontCollection }) =>
            fontCollection.getNoScriptStyleDescriptions()
          )
          .flat()
      )
    };
  };
};

class FontsCollection {
  constructor(list = []) {
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
