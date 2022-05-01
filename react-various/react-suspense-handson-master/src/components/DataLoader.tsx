import {fetchData1} from '../utils';

let dataMap = new Map<string, unknown>();

function useData<T>(cacheKey: string, fetch: () => Promise<T>): T {
  const cacheData = dataMap.get(cacheKey) as T | undefined;
  if (cacheData === undefined) {
    throw fetch().then(d => dataMap.set(cacheKey, d));
  }

  return cacheData;
}

export const DataLoader: React.VFC = () => {
  const data = useData('DataLoader1', fetchData1);

  return (
    <>
      <div>Data is {data}</div>
    </>
  );
};

export const DataLoader2: React.VFC = () => {
  const data = useData('DataLoader2', fetchData1);

  return (
    <>
      <div>Data is {data}</div>
    </>
  );
};
