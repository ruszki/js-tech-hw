import reducer, { codeAction } from './code';

test('Reducer should return zero length string as default', () => {
  expect(reducer(undefined, { type: '', payload: '' })).toEqual('');
});

test('Reducer should return the payload of proper actions', () => {
  const code = 'code';
  const action = codeAction(code);

  expect(reducer('', action)).toEqual(code);
});
