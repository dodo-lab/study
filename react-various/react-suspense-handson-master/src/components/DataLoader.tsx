import {fetchData1} from '../utils';

let dataMap = new Map<string, string>();

function useData1(cacheKey: string): string {
  const cacheData = dataMap.get(cacheKey);
  if (cacheData === undefined) {
    throw fetchData1().then(d => dataMap.set(cacheKey, d));
  }

  return cacheData;
}

export const DataLoader: React.VFC = () => {
  const data = useData1('DataLoader1');

  return (
    <>
      <div>Data is {data}</div>
    </>
  );
};

export const DataLoader2: React.VFC = () => {
  const data = useData1('DataLoader2');

  return (
    <>
      <div>Data is {data}</div>
    </>
  );
};
