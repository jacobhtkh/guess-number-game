import React, { useState, useEffect } from 'react';
import { PrimaryButton } from '../../buttons/primaryButton';

export const GuessNumberCard: React.FunctionComponent = () => {
  const [hasGameStarted, setHasGameStarted] = useState(false);

  useEffect(() => {
    setHasGameStarted(false);
  }, []);

  const onClickStartGuess = () => {
    setHasGameStarted(true);
  };

  return (
    <div className='max-w-md border border-solid rounded-md border-sky-600 shadow-md shadow-sky-600'>
      <div className='px-6 py-4 text-center'>
        {!hasGameStarted ? (
          <div>
            <h2 className=' mb-3 text-xl font-semibold tracking-tight text-sky-600'>
              Guess My Number!
            </h2>
            <h4 className='mb-2 text-sky-900'>
              Think of a number between 1 and 10,000.
            </h4>
            <p className='mb-5'>
              Click the button below to get the computer to start guessing what
              it is.
            </p>
          </div>
        ) : (
          <div className='mb-5'>
            <h4 className='text-sky-900'>Did I guess correctly?</h4>
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
