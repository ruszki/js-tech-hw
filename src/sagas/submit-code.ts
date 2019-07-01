import { takeEvery, select, call, put } from '@redux-saga/core/effects';
import { SagaIterator } from 'redux-saga';
import { SubmitCodeReducerType } from '../reducers/submit-code';
import { Action } from 'redux-actions';
import { RootState } from '../reducers/root';
import { shiftAddedAction } from '../reducers/shifts';

export function* submitCodeSaga(): SagaIterator {
  yield takeEvery(SubmitCodeReducerType, submitCode);
}

interface ShiftResponse {
  code: string;
  shift: number;
}

function* submitCode(action: Action<undefined>): SagaIterator {
  const code: string = yield select((state: RootState) => state.code);
  let shift: number | undefined = yield select(
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

      shift = jsonResponse.shift;

      yield put(
        shiftAddedAction({
          code,
          shift
        })
      );
    }
  }
}
