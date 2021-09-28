import './App.css';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarRating
          style={{ backgroundColor: 'lightblue' }}
          onDoubleClick={(e) => alert('double click')}
        />
      </header>
    </div>
  );
}

export default App;
