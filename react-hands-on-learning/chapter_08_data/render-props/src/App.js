import { FixedSizeList } from 'react-window';
import faker from 'faker';
import SimpleList from './components/SimpleList';

const tablePeaks = [
  { name: 'Freel Peak', elevation: 10891 },
  { name: 'Monument Peak', elevation: 10067 },
  { name: 'Pyramid Peak', elevation: 9983 },
  { name: 'Mt. Tallac', elevation: 9735 },
];

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));

function App() {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: 'flex' } }}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );

  return (
    <div className="App" style={{ display: 'flex' }}>
      <SimpleList
        data={tablePeaks}
        renderEmpty={<p>This list is empty</p>}
        renderItem={(item) => (
          <>
            {item.name} - {item.elevation.toLocaleString()}
          </>
        )}
      />

      <FixedSizeList
        height={window.innerHeight}
        width={600}
        itemCount={bigList.length}
        itemSize={50}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  );
}

export default App;
