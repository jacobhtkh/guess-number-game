export enum Guess {
  TooLow = 'LOW',
  TooHigh = 'HIGH',
}

const newGuess = (upperLimit: number, lowerLimit: number) => {
  return Math.round((upperLimit + lowerLimit + 1) / 2);
};

export const guessNewNumberWithinRange = (
  currentNumberGuessed: number,
  upperLimit: number,
  lowerLimit: number,
  guessStatus: Guess
) => {
  if (guessStatus === Guess.TooLow) {
    const newLowerLimit = currentNumberGuessed + 1;
    return newGuess(upperLimit, newLowerLimit);
  } else if (guessStatus === Guess.TooHigh) {
    const newUpperLimit = currentNumberGuessed - 1;
    return newGuess(newUpperLimit, lowerLimit);
  } else {
    return currentNumberGuessed;
  }
};
