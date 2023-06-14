import { render, screen } from '@testing-library/react';
import App from './App';

test('renders \'dark\' in header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dark/i);
  expect(linkElement).toBeInTheDocument();
});
