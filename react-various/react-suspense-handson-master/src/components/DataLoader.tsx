import {useState} from 'react';
import {fetchData1} from '../utils';

export const DataLoader: React.VFC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);

  if (loading && data === null) {
    throw fetchData1().then(setData);
  }

  return (
    <>
      <div>Data is {data}</div>
      <button className="border p-1" onClick={() => setLoading(true)}>
        load
      </button>
    </>
  );
};
