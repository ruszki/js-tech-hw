import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(() => {
  return {};
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test('should contains input for secret code', () => {
  shallow(
    <Provider store={store}>
      <App />
    </Provider>
  ).contains('input#CodeInputId');
});
