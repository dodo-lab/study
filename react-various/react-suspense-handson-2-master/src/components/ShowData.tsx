import {useData} from '../data';
import {fetchData1} from '../utils';

type Props = {
  dataKey: number;
};

export const ShowData: React.VFC<Props> = ({dataKey}) => {
  const data = useData(`ShowData:${dataKey}`, fetchData1);

  return (
    <p>
      Data for {dataKey} is {data}
    </p>
  );
};
