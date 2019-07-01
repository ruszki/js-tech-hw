import { takeEvery, put } from '@redux-saga/core/effects';
import { SagaIterator } from 'redux-saga';
import {
  DecryptMessageReducerType,
  DecryptMessageInput
} from '../reducers/decrypt-message';
import { Action } from 'redux-actions';
import CeasarCoding from '../services/ceasar-coding';
import { messageAction } from '../reducers/message';

export function* decryptMessageSaga(): SagaIterator {
  yield takeEvery(DecryptMessageReducerType, decryptMessage);
}

function* decryptMessage(action: Action<DecryptMessageInput>): SagaIterator {
  yield put(
    messageAction(
      CeasarCoding.decrypt(
        action.payload.encryptedMessage,
        action.payload.shift
      )
    )
  );
}
