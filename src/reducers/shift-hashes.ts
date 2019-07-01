import { handleAction, Action } from 'redux-actions';
import { ShiftAddedReducerType, ShiftAddedInput } from './shifts';

export interface ShiftHashesState {
  [hash: string]: string;
}

export default handleAction(
  ShiftAddedReducerType,
  (
    state: ShiftHashesState,
    action: Action<ShiftAddedInput>
  ): ShiftHashesState => {
    return {
      ...state,
      [action.payload.shift.hash]: action.payload.code
    };
  },
  {}
);
