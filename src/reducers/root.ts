import { combineReducers } from 'redux';
import code from './code';

export interface RootState {
  code: string;
}

export default combineReducers<RootState>({
  code
});
