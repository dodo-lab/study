let dataMap = new Map<string, unknown>();

export function useData<T>(cacheKey: string, fetch: () => Promise<T>): T {
  const cacheData = dataMap.get(cacheKey) as T | undefined;
  if (cacheData === undefined) {
    throw fetch().then(d => dataMap.set(cacheKey, d));
  }

  return cacheData;
}
