import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/root';
import { messageAction } from '../reducers/message';
import CeasarCoding from '../services/ceasar-cofing';

const Encrypt: React.FC = ({ match }: any) => {
  const code: string = useSelector(
    (state: RootState) => state.shiftHashes[match.params.uuid]
  );

  const shift: number = useSelector(
    (state: RootState) => state.shifts[code].shift
  );

  const message: string = useSelector((state: RootState) => state.message);

  const dispatch = useDispatch();

  return (
    <div>
      <p>Used secret code is {code}</p>
      <p>
        Original message&nbsp;
        <input
          type="text"
          pattern="[a-zA-Z]*"
          value={message}
          onChange={event => dispatch(messageAction(event.currentTarget.value))}
        />{' '}
        &#8594;{' '}
        <input
          type="text"
          pattern="[a-zA-Z]*"
          value={CeasarCoding.encrypt(message, shift)}
        />
        &nbsp;Encrypted message
      </p>
    </div>
  );
};

export default Encrypt;
