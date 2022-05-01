import {Suspense, useState} from 'react';
import './App.css';
import {DataLoader, DataLoader2} from './components/DataLoader';
import {RenderingNotifier} from './components/RenderingNotifier';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <RenderingNotifier name="outside-Suspend" />
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader />
        <DataLoader2 />
        <RenderingNotifier name="inside-Suspend" />
        <button className="border p-1" onClick={() => setCount(c => c + 1)}>
          {count}
        </button>
      </Suspense>
    </div>
  );
}

export default App;
