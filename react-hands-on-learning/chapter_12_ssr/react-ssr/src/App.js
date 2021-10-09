import Menu from './components/Menu';
import data from './data.json';

function App() {
  return <Menu recipes={data} title="Delicious Recipes" />;
}

export default App;
