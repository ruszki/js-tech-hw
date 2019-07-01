import React, { Dispatch, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './reducers/root';
import { codeAction } from './reducers/code';

const App: React.FC = () => {
  const code: string = useSelector((state: RootState) => state.code);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>JavaScript technologies homework</h1>
        <h2>Ceasar code</h2>
      </header>

      <div>
        <p>
          <label htmlFor="CodeInputId">Secret code: </label>
          <input
            id="CodeInputId"
            type="text"
            onChange={event => dispatch(codeAction(event.currentTarget.value))}
            value={code}
          />
        </p>
      </div>
    </div>
  );
};

export default App;
