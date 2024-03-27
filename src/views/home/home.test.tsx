import { render, screen } from '@testing-library/react';
import { HomeView } from '..';

describe('HomeView', () => {
  describe('@render', () => {
    it('renders without crashing', () => {
      render(<HomeView />);
      const homeView = screen.getByTestId('home-view');

      expect(homeView).toBeInTheDocument();
      expect(homeView).toMatchSnapshot();
    });
  });
});
