import type { HeadFontCollectorDescription } from '../../module';

export class FontsCollection {
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
