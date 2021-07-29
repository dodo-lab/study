import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'JSX'
  const list = (
    <ul>
      {[1,2,3].map(num => <li>{num}</li>)}
    </ul>
  )
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!!
        </p>
        <p>- {name} -</p>
        {list}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
