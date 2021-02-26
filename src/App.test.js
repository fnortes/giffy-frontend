import { render, screen } from '@testing-library/react';
import App from './App';
import 'intersection-observer';

test('renders without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Última búsqueda/i);
  expect(linkElement).toBeInTheDocument();
});
