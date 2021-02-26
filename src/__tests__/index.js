import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import 'intersection-observer';
import userEvent from '@testing-library/user-event';

test('Home work as expected', async () => {
  const { findByText } = render(<App />);
  const title = await findByText(/Última búsqueda/i);
  expect(title).toBeVisible();
});

test('Search form could be used', async () => {
  render(<App />);
  const input = await screen.findByRole('textbox');
  userEvent.type(input, 'Matrix{enter}');

  const title = await screen.findByText('Matrix');
  expect(title).toBeVisible();
});