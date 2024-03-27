import React, { useState, useEffect } from 'react';
import { PrimaryButton } from '../../buttons/primaryButton';
import { randomIntegerInRange } from '../../../utils/randomIntegerInRange';
import {
  Guess,
  guessNewNumberWithinRange,
} from '../../../utils/guessNewNumberWithinRange';

type GuessNumberCardProps = {
  minNumberToGuessBetween: number;
  maxNumberToGuessBetween: number;
};

export const GuessNumberCard: React.FunctionComponent<GuessNumberCardProps> = ({
  minNumberToGuessBetween,
  maxNumberToGuessBetween,
}) => {
  const intialMinNumberToGuessBetween = minNumberToGuessBetween;
  const intialMaxNumberToGuessBetween = maxNumberToGuessBetween;

  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [hasWonGame, setHasWonGame] = useState(false);
  const [currentMinNumberToGuessBetween, setCurrentMinNumberToGuessBetween] =
    useState(intialMinNumberToGuessBetween);
  const [currentMaxNumberToGuessBetween, setCurrentMaxNumberToGuessBetween] =
    useState(intialMaxNumberToGuessBetween);
  const [currentGuess, setCurrentGuess] = useState<number | null>(null);
  const [correctGuess, setCorrectGuess] = useState<number | null>(null);

  useEffect(() => {
    setHasGameStarted(false);
  }, []);

  const onStartGuess = () => {
    setHasGameStarted(true);
    setCurrentGuess(
      randomIntegerInRange(minNumberToGuessBetween, maxNumberToGuessBetween)
    );
  };

  const onGuessTooLow = () => {
    if (!currentGuess) return;
    setCurrentMinNumberToGuessBetween(currentGuess);

    const newGuess = guessNewNumberWithinRange(
      currentGuess,
      currentMaxNumberToGuessBetween,
      currentMinNumberToGuessBetween,
      Guess.TooLow
    );

    setCurrentGuess(newGuess);
  };

  const onCorrectGuess = () => {
    setHasWonGame(true);
    setCorrectGuess(currentGuess);
    setCurrentGuess(null);
  };

  const onGuessTooHigh = () => {
    if (!currentGuess) return;
    setCurrentMaxNumberToGuessBetween(currentGuess);

    const newGuess = guessNewNumberWithinRange(
      currentGuess,
      currentMaxNumberToGuessBetween,
      currentMinNumberToGuessBetween,
      Guess.TooHigh
    );

    setCurrentGuess(newGuess);
  };

  const onReplayGame = () => {
    setHasGameStarted(false);
    setHasWonGame(false);
    setCurrentGuess(null);
    setCurrentMaxNumberToGuessBetween(intialMaxNumberToGuessBetween);
    setCurrentMinNumberToGuessBetween(intialMinNumberToGuessBetween);
  };

  let bottomButtons;

  if (!hasGameStarted) {
    bottomButtons = (
      <PrimaryButton text='Start guessing' onClick={onStartGuess} />
    );
  } else if (hasGameStarted && !hasWonGame) {
    bottomButtons = (
      <div className='flex justify-between space-x-6'>
        <PrimaryButton text='Too low' onClick={onGuessTooLow} />
        <PrimaryButton text='Correct' onClick={onCorrectGuess} />
        <PrimaryButton text='Too high' onClick={onGuessTooHigh} />
      </div>
    );
  } else if (hasGameStarted && hasWonGame) {
    bottomButtons = <PrimaryButton text='Play again' onClick={onReplayGame} />;
  }

  return (
    <div className='max-w-md border border-solid rounded-md border-sky-600 shadow-md shadow-sky-600'>
      <div className='px-6 py-4 text-center'>
        {!hasGameStarted ? (
          <div className='mb-5'>
            <h2 className='mb-3 text-xl font-semibold tracking-tight text-sky-600'>
              Guess My Number!
            </h2>
            <h4 className='mb-2 text-sky-900'>
              {`Think of a number between ${intialMinNumberToGuessBetween} and ${intialMaxNumberToGuessBetween}.`}
            </h4>
            <p>
              Click the button below to get the computer to start guessing what
              it is.
            </p>
          </div>
        ) : (
          <div className='mb-5'>
            <h2 className='mb-3 text-xl font-semibold tracking-tight text-sky-600'>
              {!hasWonGame
                ? `Guessing your number between ${minNumberToGuessBetween} and ${maxNumberToGuessBetween}`
                : `Congratulations! Your guess of ${correctGuess} was correct!`}
            </h2>
            <h4 className='text-sky-900'>
              {!hasWonGame
                ? `Is my guess of ${currentGuess} correct?`
                : 'You should test my mighty guessing skills once again!'}
            </h4>
          </div>
        )}
        {bottomButtons}
      </div>
    </div>
  );
};
