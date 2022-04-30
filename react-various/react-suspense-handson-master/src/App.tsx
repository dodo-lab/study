import React, { Suspense, useState } from 'react';
import './App.css'
import { SometimesSuspend } from './components/SometimesSuspend';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <SometimesSuspend />
        <button className='border p-1' onClick={() => setCount((c) => c + 1)}>
          {count}
        </button>
      </Suspense>
    </div>
  )
}

export default App
