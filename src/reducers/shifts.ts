import { Action, handleAction, createAction } from 'redux-actions';

const ShiftAddedReducerType: string = 'ShiftAdded';

export interface ShiftsState {
  [c: string]: number;
}

interface ShiftAddedInput {
  code: string;
  shift: number;
}

export const shiftAddedAction = createAction(
  ShiftAddedReducerType,
  (input: ShiftAddedInput) => input
);

export default handleAction(
  ShiftAddedReducerType,
  (state: ShiftsState, action: Action<ShiftAddedInput>): ShiftsState => {
    return {
      ...state,
      [action.payload.code]: action.payload.shift
    };
  },
  {}
);
