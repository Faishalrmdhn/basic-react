import { render, screen } from '@testing-library/react';
import App from './App';

test('renders words', () => {
  render(<App />); //rendering in virtual dom
  const word1 = screen.getByText(/React Try/i);
  const word2 = screen.getByText(/whatsitoya/i)
  expect(word1).toBeInTheDocument();
  expect(word2).toBeInTheDocument();
});
