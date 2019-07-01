import { combineReducers } from 'redux';
import code from './code';
import shifts, { ShiftsState } from './shifts';
import shiftHashes, { ShiftHashesState } from './shift-hashes';
import message from './message';

export interface RootState {
  code: string;
  shifts: ShiftsState;
  shiftHashes: ShiftHashesState;
  message: string;
}

export default combineReducers<RootState>({
  code,
  shifts,
  shiftHashes,
  message
});
