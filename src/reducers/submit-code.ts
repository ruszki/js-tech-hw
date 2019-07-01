import { createAction } from 'redux-actions';

export const SubmitCodeReducerType: string = 'SubmitCode';

export const submitCodeAction = createAction(SubmitCodeReducerType);
