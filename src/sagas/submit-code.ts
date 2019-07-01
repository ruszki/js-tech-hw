import {
  takeEvery,
  select,
  call,
  put,
  putResolve
} from '@redux-saga/core/effects';
import { SagaIterator } from 'redux-saga';
import { SubmitCodeReducerType } from '../reducers/submit-code';
import { RootState } from '../reducers/root';
import { shiftAddedAction, ShiftState } from '../reducers/shifts';
import uuid from 'uuid';

export function* submitCodeSaga(): SagaIterator {
  yield takeEvery(SubmitCodeReducerType, submitCode);
}

interface ShiftResponse {
  code: string;
  shift: number;
}

function* submitCode(): SagaIterator {
  const code: string = yield select((state: RootState) => state.code);
  let shift: ShiftState | undefined = yield select(
    (state: RootState) => state.shifts[code]
  );

  if (shift === undefined) {
    const response: Response = yield call(
      fetch,
      window.location.protocol +
        '//' +
        window.location.hostname +
        ':8080/shift/' +
        code
    );

    if (response.ok) {
      const jsonResponse: ShiftResponse = yield call(
        response.json.bind(response)
      );

      shift = {
        shift: jsonResponse.shift,
        hash: uuid()
      };

      yield putResolve(
        shiftAddedAction({
          code,
          shift
        })
      );
    }
  }

  if (shift !== undefined) {
    window.location.assign('/encrypt/' + shift.hash);
  }
}
