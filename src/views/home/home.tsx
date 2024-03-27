import * as React from 'react';
import { GuessNumberCard } from '../../components/cards/guessNumberCard';

export const HomeView: React.FunctionComponent = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <GuessNumberCard
        maxNumberToGuessBetween={10000}
        minNumberToGuessBetween={1}
      />
    </div>
  );
};
