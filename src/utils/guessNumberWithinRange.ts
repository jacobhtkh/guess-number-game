export const guessNumberWithinRange = (
  numberGuessed: number,
  upperLimit: number,
  lowerLimit: number,
  isGuessTooLow?: boolean,
  isGuessTooHigh?: boolean,
  isGuessCorrect?: boolean
) => {
  const newGuess = (upperLimit: number, lowerLimit: number) => {
    return Math.round((upperLimit + lowerLimit + 1) / 2);
  };

  if (isGuessTooLow) {
    const newLowerLimit = numberGuessed + 1;
    return newGuess(upperLimit, newLowerLimit);
  } else if (isGuessTooHigh) {
    const newUpperLimit = numberGuessed - 1;
    return newGuess(newUpperLimit, lowerLimit);
  } else if (isGuessCorrect) {
    return;
  }
};
