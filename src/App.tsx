import React from 'react';
import useStore, { CountSlice } from 'store/store';
import shallow from 'zustand/shallow';
import logo from './logo.svg';
import './App.css';

const App = (): JSX.Element => {
  const { count, increase, decrease, reset, next } = useStore(
    (state: CountSlice) => ({
      count: state.count,
      increase: state.increase,
      decrease: state.decrease,
      reset: state.reset,
      next: state.next
    }),
    shallow
  );
  // const count = useStore((state: any) => state.count);
  // const increase = useStore((state: any) => state.increase);
  // const decrease = useStore((state: any) => state.decrease);
  // const reset = useStore((state: any) => state.reset);
  // useEffect(() => getCounter(), [getCounter]);

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
        <p>Next: {next()}</p>
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
