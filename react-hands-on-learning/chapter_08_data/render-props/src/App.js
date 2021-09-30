import SimpleList from './components/SimpleList';

const tablePeaks = [
  { name: 'Freel Peak', elevation: 10891 },
  { name: 'Monument Peak', elevation: 10067 },
  { name: 'Pyramid Peak', elevation: 9983 },
  { name: 'Mt. Tallac', elevation: 9735 },
];

function App() {
  return (
    <div className="App">
      <SimpleList
        data={tablePeaks}
        renderEmpty={<p>This list is empty</p>}
        renderItem={(item) => (
          <>
            {item.name} - {item.elevation.toLocaleString()}
          </>
        )}
      />
    </div>
  );
}

export default App;
