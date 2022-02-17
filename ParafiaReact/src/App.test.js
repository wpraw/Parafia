import { render, screen } from '@testing-library/react';
import Routers from './App';

test('renders learn react link', () => {
  render(<Routers />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
