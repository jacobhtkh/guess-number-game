import React, { useState, useEffect } from 'react';
import { PrimaryButton } from '../../buttons/primaryButton';
import { randomIntegerInRange } from '../../../utils/randomIntegerInRange';

export const GuessNumberCard: React.FunctionComponent = () => {
  const minNumberToGuess = 1;
  const maxNumberToGuess = 10000;
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [initialGuess, setInitialGuess] = useState<number>();

  useEffect(() => {
    setHasGameStarted(false);
  }, []);

  const onClickStartGuess = () => {
    setHasGameStarted(true);
    setInitialGuess(randomIntegerInRange(minNumberToGuess, maxNumberToGuess));
  };

  return (
    <div className='max-w-md border border-solid rounded-md border-sky-600 shadow-md shadow-sky-600'>
      <div className='px-6 py-4 text-center'>
        {!hasGameStarted ? (
          <div className='mb-5'>
            <h2 className='mb-3 text-xl font-semibold tracking-tight text-sky-600'>
              Guess My Number!
            </h2>
            <h4 className='mb-2 text-sky-900'>
              {`Think of a number between ${minNumberToGuess} and ${maxNumberToGuess}.`}
            </h4>
            <p>
              Click the button below to get the computer to start guessing what
              it is.
            </p>
          </div>
        ) : (
          <div className='mb-5'>
            <h2 className='mb-3 text-xl font-semibold tracking-tight text-sky-600'>
              {`Guessing your number between ${minNumberToGuess} and ${maxNumberToGuess}`}
            </h2>
            <h4 className='text-sky-900'>{`Is my guess of ${initialGuess} correct?`}</h4>
          </div>
        )}
        {!hasGameStarted ? (
          <PrimaryButton text='Start guessing' onClick={onClickStartGuess} />
        ) : (
          <div className='flex justify-between space-x-6'>
            <PrimaryButton text='Too low' onClick={onClickStartGuess} />
            <PrimaryButton text='Correct' onClick={onClickStartGuess} />
            <PrimaryButton text='Too high' onClick={onClickStartGuess} />
          </div>
        )}
      </div>
    </div>
  );
};
