import { render, screen } from '@testing-library/react';
import { GuessNumberCard } from '.';
describe('GuessNumberCard', () => {
  describe('@render', () => {
    it('renders without crashing', () => {
      render(
        <GuessNumberCard
          minNumberToGuessBetween={1}
          maxNumberToGuessBetween={10000}
        />
      );
      const guessNumberCard = screen.getByTestId('guess-number-card');

      expect(guessNumberCard).toBeInTheDocument();
      expect(guessNumberCard).toMatchSnapshot();
    });
  });
});
