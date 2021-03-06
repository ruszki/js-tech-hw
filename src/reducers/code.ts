import { Action, createAction, handleAction } from 'redux-actions';

const CodeReducerType: string = 'Code';

export const codeAction = createAction(CodeReducerType, (code: string) => code);

export default handleAction(
  CodeReducerType,
  (state: string, action: Action<string>): string => action.payload,
  ''
);
