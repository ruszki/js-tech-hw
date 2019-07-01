import React from 'react';
import { render, mount } from 'enzyme';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import SecretCode from './SecretCode';
import { codeAction } from '../reducers/code';
import { submitCodeAction } from '../reducers/submit-code';

const code = 'code';
let store: Store = {
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn(),
  replaceReducer: jest.fn()
};

beforeEach(() => {
  store = {
    dispatch: jest.fn(),
    getState: jest.fn(),
    subscribe: jest.fn(),
    replaceReducer: jest.fn()
  };

  (store.getState as jest.Mock).mockReturnValue({
    code
  });
});

test('should contains input for secret code', () => {
  expect(
    render(
      <Provider store={store}>
        <SecretCode />
      </Provider>
    ).has('input#CodeInputId').length
  ).toBe(1);
});

test('should trigger dispatch for secret code', () => {
  mount(
    <Provider store={store}>
      <SecretCode />
    </Provider>
  )
    .find('input#CodeInputId')
    .simulate('change', { currentTarget: { value: code } });

  expect((store.dispatch as jest.Mock).mock.calls[0][0]).toEqual(
    codeAction(code)
  );
});

test('should contains a button to submit the secret code', () => {
  expect(
    render(
      <Provider store={store}>
        <SecretCode />
      </Provider>
    ).has('button').length
  ).toBe(1);
});

test('should trigger dispatch to submit the secret code', () => {
  mount(
    <Provider store={store}>
      <SecretCode />
    </Provider>
  )
    .find('button')
    .simulate('click', {});

  expect((store.dispatch as jest.Mock).mock.calls[0][0]).toEqual(
    submitCodeAction()
  );
});
