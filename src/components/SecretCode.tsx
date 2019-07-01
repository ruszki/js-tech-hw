import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/root';
import { codeAction } from '../reducers/code';
import { submitCodeAction } from '../reducers/submit-code';

const SecretCode: React.FC = () => {
  const code: string = useSelector((state: RootState) => state.code);
  const dispatch = useDispatch();

  return (
    <div>
      <p>
        <label htmlFor="CodeInputId">Secret code: </label>
        <input
          id="CodeInputId"
          type="text"
          onChange={event => dispatch(codeAction(event.currentTarget.value))}
          value={code}
        />
      </p>
      <p>
        <button onClick={() => dispatch(submitCodeAction())}>Use code!</button>
      </p>
    </div>
  );
};

export default SecretCode;
