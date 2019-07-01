import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/root';

const Encrypt: React.FC = ({ match }: any) => {
  const code: string = useSelector(
    (state: RootState) => state.shiftHashes[match.params.uuid]
  );

  return (
    <div>
      <p>Used secret code is {code}</p>
      <p>
        Original message&nbsp;
        <input type="text" /> &#8594; <input type="text" />
        &nbsp;Encrypted message
      </p>
    </div>
  );
};

export default Encrypt;
