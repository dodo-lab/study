import React, { Suspense, useState } from 'react';
import './App.css'
import { RenderingNotifier } from './components/RenderingNotifier';
import { SometimesSuspend } from './components/SometimesSuspend';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <RenderingNotifier name="outside-Suspend" />
      <Suspense fallback={<p>Loading...</p>}>
        <SometimesSuspend />
        <RenderingNotifier name="inside-Suspend" />
        <button className='border p-1' onClick={() => setCount((c) => c + 1)}>
          {count}
        </button>
      </Suspense>
    </div>
  )
}

export default App
