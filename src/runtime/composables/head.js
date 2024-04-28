import { logDebug } from '../utils/log';

export default function () {
  const head = injectHead();
  const nuxtApp = useNuxtApp();

  const {
    public: {
      booster: { debug }
    }
  } = useRuntimeConfig();
  const collection = ref(new FontsCollection());

  let headEntry;
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

  nuxtApp.$router.beforeEach(() => {
    nextTick(() => {
      collection.value = new FontsCollection(
        collection.value.list.filter(item => {
          return !disposeCollections.value.includes(item);
        })
      );
      disposeCollections.value = [];
    });
  });

  let disposeCollections = ref([]);
  const push = (fontCollection, isCritical, options) => {
    if (!collection) {
      throw new Error('pushFontCollection must be called before setupHead');
    }
    const notEmpty = !fontCollection.list.length;
    let value;
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

const createEntry = (collection, debug) => {
  if (debug) {
    logDebug('Head Font Collections:', collection.toJSON());
  }

  const items = collection.list.filter(
    ({ fontCollection }) => fontCollection.size
  );
  return {
    link:
      (import.meta.server || process.env.prerender) &&
      prepareItems(
        items
          .filter(({ fontCollection }) => fontCollection.size)
          .map(({ fontCollection, isCritical }) =>
            fontCollection.getPreloadDescriptions(isCritical)
          )
          .flat()
      ),
    style: prepareItems(
      items
        .map(({ fontCollection, options }) =>
          fontCollection.getStyleDescriptions(options)
        )
        .flat()
    ),
    noscript:
      (import.meta.server || process.env.prerender) &&
      prepareItems(
        items
          .map(({ fontCollection }) =>
            fontCollection.getNoScriptStyleDescriptions()
          )
          .flat()
      )
  };
};

const prepareItems = items =>
  Array.from(
    new Map(items.map(item => [item.key, { ...item, key: undefined }])).values()
  );

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
