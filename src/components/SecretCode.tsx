import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/root';
import { codeAction } from '../reducers/code';

const SecretCode: React.FC = () => {
  const code: string = useSelector((state: RootState) => state.code);
  const dispatch = useDispatch();

  return (
    <p>
      <label htmlFor="CodeInputId">Secret code: </label>
      <input
        id="CodeInputId"
        type="text"
        onChange={event => dispatch(codeAction(event.currentTarget.value))}
        value={code}
      />
    </p>
  );
};

export default SecretCode;
