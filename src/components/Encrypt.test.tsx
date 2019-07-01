import React from 'react';
import { Store } from 'redux';
import Encrypt from './Encrypt';
import { Provider } from 'react-redux';
import { render, mount } from 'enzyme';
import CeasarCoding from '../services/ceasar-coding';
import { messageAction } from '../reducers/message';
import { decryptMessageAction } from '../reducers/decrypt-message';

const code = 'code';
const uuid = 'uuid';
const message = 'message';
const match = {
  params: {
    uuid
  }
};
const shift = 5;
let store: Store;

beforeEach(() => {
  store = {
    dispatch: jest.fn(),
    getState: jest.fn(),
    subscribe: jest.fn(),
    replaceReducer: jest.fn()
  };

  (store.getState as jest.Mock).mockReturnValue({
    shiftHashes: {
      [uuid]: code
    },
    shifts: {
      [code]: {
        shift
      }
    },
    message
  });
});

test('should contains input for original message', () => {
  expect(
    render(
      <Provider store={store}>
        <Encrypt match={match} />
      </Provider>
    ).has('input#originalMessage').length
  ).toBe(1);
});

test('should show the original message', () => {
  expect(
    render(
      <Provider store={store}>
        <Encrypt match={match} />
      </Provider>
    )
      .find('input#originalMessage')
      .attr('value')
  ).toBe(message);
});

test('should trigger encryption update', () => {
  mount(
    <Provider store={store}>
      <Encrypt match={match} />
    </Provider>
  )
    .find('input#originalMessage')
    .simulate('change');

  expect((store.dispatch as jest.Mock).mock.calls[0][0]).toEqual(
    messageAction(message)
  );
});

test('should contains input for encrypted message', () => {
  expect(
    render(
      <Provider store={store}>
        <Encrypt match={match} />
      </Provider>
    ).has('input#encryptedMessage').length
  ).toBe(1);
});

test('should show the encrypted message', () => {
  expect(
    render(
      <Provider store={store}>
        <Encrypt match={match} />
      </Provider>
    )
      .find('input#encryptedMessage')
      .attr('value')
  ).toBe(CeasarCoding.encrypt(message, shift));
});

test('should trigger decryption update', () => {
  mount(
    <Provider store={store}>
      <Encrypt match={match} />
    </Provider>
  )
    .find('input#encryptedMessage')
    .simulate('change');

  expect((store.dispatch as jest.Mock).mock.calls[0][0]).toEqual(
    decryptMessageAction({
      encryptedMessage: CeasarCoding.encrypt(message, shift),
      shift
    })
  );
});
