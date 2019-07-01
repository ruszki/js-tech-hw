import { combineReducers } from 'redux';
import code from './code';
import shifts, { ShiftsState } from './shifts';
import shiftHashes, { ShiftHashesState } from './shift-hashes';

export interface RootState {
  code: string;
  shifts: ShiftsState;
  shiftHashes: ShiftHashesState;
}

export default combineReducers<RootState>({
  code,
  shifts,
  shiftHashes
});
