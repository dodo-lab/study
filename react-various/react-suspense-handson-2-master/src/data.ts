import {Loadable} from './Loadable';

const dataMap = new Map<string, Loadable<unknown>>();

export function useData<T>(cacheKey: string, fetch: () => Promise<T>): T {
  const cacheData = dataMap.get(cacheKey) as Loadable<T> | undefined;
  if (cacheData === undefined) {
    const [loadable, promise] = Loadable.newAndGetPromise(fetch());
    dataMap.set(cacheKey, loadable);
    throw promise;
  }

  return cacheData.getOrThrow();
}
