import { render, screen } from '@testing-library/react';
import App from './App';

test('renders \'Emil Soleymani\' in header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Emil Soleymani/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders \'Home\' in header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders \'About\' in header', () => {
  render(<App />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});
