import AsyncStorage from '@react-native-async-storage/async-storage';

export const keys = {
  uuid: 'uuid',
};

export default class LocalStorageUtils {
  static setItem(key: string, value: Object): Promise<void> {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key: string): Promise<void> {
    return AsyncStorage.getItem(key).then(item => {
      if (item === undefined || item === '' || item === null) {
        return undefined;
      }
      try {
        return JSON.parse(item);
      } catch (err) {
        return item;
      }
    });
  }

  static removeItem(key: string): Promise<void> {
    return AsyncStorage.removeItem(key);
  }

  static removeAll(): Promise<void> {
    return AsyncStorage.clear();
  }
}
