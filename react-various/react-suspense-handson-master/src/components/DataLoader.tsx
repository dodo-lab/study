import {fetchData1} from '../utils';

let data: string | undefined;

function useData1(): string {
  if (data === undefined) {
    throw fetchData1().then(d => (data = d));
  }

  return data;
}

export const DataLoader: React.VFC = () => {
  const data = useData1();

  return (
    <>
      <div>Data is {data}</div>
    </>
  );
};
