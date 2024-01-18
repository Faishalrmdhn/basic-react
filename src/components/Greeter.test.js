import { render, screen } from '@testing-library/react';
import App from './App';

test('renders every greeter words', () => {
  render(<App />); //rendering in virtual dom
  const word1 = screen.getByText(/whatsitoya/i)
  const word2 = screen.getByText(/wadup/i)
  expect(word1).toBeInTheDocument();
  expect(word2).toBeInTheDocument();
});
