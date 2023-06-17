import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders \'Home\' in header 2', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders \'About\' in header 2', () => {
  render(<App />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});
