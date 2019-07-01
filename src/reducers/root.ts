import { combineReducers } from 'redux';
import code from './code';

export interface RootState {}

export default combineReducers<RootState>({
  code
});
