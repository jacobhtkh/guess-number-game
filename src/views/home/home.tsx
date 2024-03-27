import * as React from 'react';
import { GuessNumberCard } from '../../components/cards/guessNumberCard';

export const HomeView: React.FunctionComponent = () => {
  const maxNumberToGuessBetween = 10000;
  const minNumberToGuessBetween = 1;

  return (
    <div
      data-qa={'home-view'}
      className='h-screen flex items-center justify-center'
    >
      <GuessNumberCard
        maxNumberToGuessBetween={maxNumberToGuessBetween}
        minNumberToGuessBetween={minNumberToGuessBetween}
      />
    </div>
  );
};
