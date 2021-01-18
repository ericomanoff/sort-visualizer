import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sort menu', () => {
  render(<App />);
  const linkElement = screen.getByText(/sort method/i);
  expect(linkElement).toBeInTheDocument();
});
