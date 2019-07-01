import CeasarCoding from './ceasar-coding';

const shift = 15;

test('should not change message with encryption if shift is 0', () => {
  const message = 'messAGE';
  expect(CeasarCoding.encrypt(message, 0)).toEqual(message);
});

test('should not change message with decryption if shift is 0', () => {
  const message = 'messAGE';
  expect(CeasarCoding.decrypt(message, 0)).toEqual(message);
});

test('should encrypt lowercase letters to lowercase letters', () => {
  const message = 'abcdefghijklmnopqrstuvwxyz';
  expect(CeasarCoding.encrypt(message, shift)).toEqual(
    'pqrstuvwxyzabcdefghijklmno'
  );
});

test('should encrypt uppercase letters to uppercase letters', () => {
  const message = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  expect(CeasarCoding.encrypt(message, shift)).toEqual(
    'PQRSTUVWXYZABCDEFGHIJKLMNO'
  );
});

test('should encrypt mixed letters accordingly', () => {
  const message = 'ABcDffghiJKLMNOPqRSTuVWxyZ';
  expect(CeasarCoding.encrypt(message, shift)).toEqual(
    'PQrSuuvwxYZABCDEfGHIjKLmnO'
  );
});

test('should encrypt ignore non letters', () => {
  const message = "AbCDEf123ghIj';KLMNÁŰ";
  expect(CeasarCoding.encrypt(message, shift)).toEqual('PqRSTuvwXyZABC');
});

test('should encrypt works with larger shifts', () => {
  const message = 'ABcDffghiJKLMNOPqRSTuVWxyZ';
  expect(CeasarCoding.encrypt(message, shift * 20)).toEqual(
    'OPqRttuvwXYZABCDeFGHiJKlmN'
  );
});

test('should decrypt lowercase letters to lowercase letters', () => {
  const message = 'abcdefghijklmnopqrstuvwxyz';
  expect(CeasarCoding.decrypt(message, shift)).toEqual(
    'lmnopqrstuvwxyzabcdefghijk'
  );
});

test('should decrypt uppercase letters to uppercase letters', () => {
  const message = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  expect(CeasarCoding.decrypt(message, shift)).toEqual(
    'LMNOPQRSTUVWXYZABCDEFGHIJK'
  );
});

test('should decrypt mixed letters accordingly', () => {
  const message = 'ABcDffghiJKLMNOPqRSTuVWxyZ';
  expect(CeasarCoding.decrypt(message, shift)).toEqual(
    'LMnOqqrstUVWXYZAbCDEfGHijK'
  );
});

test('should decrypt ignore non letters', () => {
  const message = "AbCDEf123ghIj';KLMNÁŰ";
  expect(CeasarCoding.decrypt(message, shift)).toEqual('LmNOPqrsTuVWXY');
});

test('should decrypt works with larger shifts', () => {
  const message = 'ABcDffghiJKLMNOPqRSTuVWxyZ';
  expect(CeasarCoding.decrypt(message, shift * 20)).toEqual(
    'MNoPrrstuVWXYZABcDEFgHIjkL'
  );
});
