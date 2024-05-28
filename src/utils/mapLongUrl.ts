import ShortUniqueId from 'short-unique-id'
import { cache } from './cache';

const { randomUUID } = new ShortUniqueId({ length: 10 });

export const mapLongUrl = (url: string) => {
  const key = randomUUID();
  cache.set(key, url);
  return key;
};