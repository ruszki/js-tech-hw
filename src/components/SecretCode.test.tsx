import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SecretCode from './SecretCode';

const store = createStore(() => {
  return {};
});

test('should contains input for secret code', () => {
  shallow(
    <Provider store={store}>
      <SecretCode />
    </Provider>
  ).contains('input#CodeInputId');
});
