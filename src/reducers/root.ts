import { combineReducers } from 'redux';
import code from './code';
import shifts, { ShiftsState } from './shifts';

export interface RootState {
  code: string;
  shifts: ShiftsState;
}

export default combineReducers<RootState>({
  code,
  shifts
});
