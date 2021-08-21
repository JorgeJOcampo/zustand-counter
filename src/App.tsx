import React, { useState } from 'react';
import create from 'zustand';
import logo from './logo.svg';
import './App.css';

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state: any) => ({ count: state.count + 1 })),
  decrease: () => set((state: any) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 })
}));

const App = (): JSX.Element => {
  const count = useStore((state: any) => state.count);
  const increase = useStore((state: any) => state.increase);
  const decrease = useStore((state: any) => state.decrease);
  const reset = useStore((state: any) => state.reset);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          Count is: {count}
          <button type="button" onClick={increase}>
            +
          </button>
          <button type="button" onClick={decrease}>
            -
          </button>
          <button type="button" onClick={reset}>
            reset
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
