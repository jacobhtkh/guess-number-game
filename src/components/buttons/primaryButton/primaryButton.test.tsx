import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { PrimaryButton } from './primaryButton';

describe('PrimaryButton', () => {
  const buttonText = 'Click me!';

  describe('@render', () => {
    it('renders without crashing', () => {
      const mockFn = jest.fn();
      render(<PrimaryButton text={buttonText} onClick={mockFn} />);
      const primaryButton = screen.getByTestId('primary-button');

      expect(primaryButton).toBeInTheDocument();
      expect(screen.getByText(buttonText)).toBeInTheDocument();
    });
  });
  describe('@actions', () => {
    it('clicking button calls onClick handler', async () => {
      const mockFn = jest.fn();
      render(<PrimaryButton text={buttonText} onClick={mockFn} />);
      const primaryButton = screen.getByTestId('primary-button');

      fireEvent.click(primaryButton);
      expect(mockFn).toHaveBeenCalled();
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });
});
