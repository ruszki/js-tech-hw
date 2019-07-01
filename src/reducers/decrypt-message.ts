import { createAction } from 'redux-actions';

export const DecryptMessageReducerType: string = 'DecryptMessage';

export interface DecryptMessageInput {
  encryptedMessage: string;
  shift: number;
}

export const decryptMessageAction = createAction(
  DecryptMessageReducerType,
  (input: DecryptMessageInput) => input
);
