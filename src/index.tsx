import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas/sagas';
import reducers, { RootState } from './reducers/root';
import { Provider } from 'react-redux';
import { saveState, loadState } from './reducers/local-storage';

const sagaMiddleware = createSagaMiddleware();

const storedState: RootState | undefined = loadState();

const store = createStore(
  reducers,
  storedState,
  applyMiddleware(sagaMiddleware)
);

store.subscribe(() => {
  saveState(store.getState());
});

sagaMiddleware.run(sagas);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
