import { Action, createAction, handleAction } from 'redux-actions';

const MessageReducerType: string = 'Message';

export const messageAction = createAction(
  MessageReducerType,
  (message: string) => message
);

export default handleAction(
  MessageReducerType,
  (state: string, action: Action<string>): string => action.payload,
  ''
);
