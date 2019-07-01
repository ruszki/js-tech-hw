import { SagaIterator } from 'redux-saga';
import { fork } from '@redux-saga/core/effects';
import { submitCodeSaga } from './submit-code';

export default function* sagas(): SagaIterator {
  yield fork(submitCodeSaga);
}
