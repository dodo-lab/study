import { Suspense, useState } from 'react';
import './App.css'
import { DataLoader } from './components/DataLoader';
import { RenderingNotifier } from './components/RenderingNotifier';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <RenderingNotifier name="outside-Suspend" />
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader />
        <RenderingNotifier name="inside-Suspend" />
        <button className='border p-1' onClick={() => setCount((c) => c + 1)}>
          {count}
        </button>
      </Suspense>
    </div>
  )
}

export default App
