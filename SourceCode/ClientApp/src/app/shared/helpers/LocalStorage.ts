import { IStorageItem } from "../models/Common.model";

export class StorageItem {
  key: string | null;
  value: any;

  constructor(data: IStorageItem) {
    this.key = data.key;
    this.value = data.value;
  }
}
// class for working with local storage in browser (common that can use other classes for store some data)
export class LocalStorage {
  localStorageSupported: boolean;

  constructor() {
    this.localStorageSupported = typeof window["localStorage"] != "undefined" && window["localStorage"] != null;
  }

  // add value to storage
  add(key: string, item: string) {
    if (this.localStorageSupported) {
      localStorage.setItem(key, item);
    }
  }

  // get all values from storage (all items)
  getAllItems(): Array<StorageItem> {
    var list = new Array<StorageItem>();

    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key ? key : "");

      list.push(
        new StorageItem({
          key: key,
          value: value,
        })
      );
    }

    return list;
  }

  // get only all values from localStorage
  getAllValues(): Array<any> {
    var list = new Array<any>();

    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key ? key : "");

      list.push(value);
    }

    return list;
  }

  // get one item by key from storage
  get(key: string): string {
    if (this.localStorageSupported) {
      var item = localStorage.getItem(key);
      return item ? item : "";
    } else {
      return "";
    }
  }

  // remove value from storage
  remove(key: string) {
    if (this.localStorageSupported) {
      localStorage.removeItem(key);
    }
  }

  // clear storage (remove all items from it)
  clear() {
    if (this.localStorageSupported) {
      localStorage.clear();
    }
  }
}
