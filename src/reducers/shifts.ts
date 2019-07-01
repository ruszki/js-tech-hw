import { Action, handleAction, createAction } from 'redux-actions';

export const ShiftAddedReducerType: string = 'ShiftAdded';

export interface ShiftState {
  shift: number;
  hash: string;
}

export interface ShiftsState {
  [c: string]: ShiftState;
}

export interface ShiftAddedInput {
  code: string;
  shift: ShiftState;
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
