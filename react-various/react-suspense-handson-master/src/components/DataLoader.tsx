import {useData} from '../data';
import {Loadable} from '../Loadable';
import {fetchData1} from '../utils';

type Props = {
  data: Loadable<string>;
};

export const DataLoader: React.VFC<Props> = ({data}) => {
  const value = data.getOrThrow();

  return (
    <>
      <div>Data is {value}</div>
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
