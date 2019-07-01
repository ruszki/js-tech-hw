import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/root';
import { messageAction } from '../reducers/message';
import CeasarCoding from '../services/ceasar-coding';
import { decryptMessageAction } from '../reducers/decrypt-message';

const filterNonLetters = (message: string): string => {
  return Array.from(message)
    .filter((char: string) => char.match(/^[a-zA-Z]$/))
    .join('');
};

const Encrypt: React.FC<{
  match: any;
}> = ({ match }: any) => {
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
        <label htmlFor="originalMessage">
          Original message<span aria-hidden="true">&nbsp;</span>
        </label>
        <input
          id="originalMessage"
          type="text"
          pattern="[a-zA-Z]*"
          value={message}
          onChange={event =>
            dispatch(messageAction(filterNonLetters(event.currentTarget.value)))
          }
          autoFocus
          tabIndex={1}
        />{' '}
        &#8594;{' '}
        <input
          id="encryptedMessage"
          type="text"
          pattern="[a-zA-Z]*"
          value={CeasarCoding.encrypt(message, shift)}
          onChange={event =>
            dispatch(
              decryptMessageAction({
                encryptedMessage: filterNonLetters(event.currentTarget.value),
                shift
              })
            )
          }
          tabIndex={2}
        />
        <label htmlFor="encryptedMessage">
          <span aria-hidden="true">&nbsp;</span>Encrypted message
        </label>
      </p>

      <p>
        <a href="/">Use different code</a>
      </p>
    </div>
  );
};

export default Encrypt;
