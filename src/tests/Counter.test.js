// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const titleElement = screen.getByText(/Counter/i);
  expect(titleElement).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText(/\+/i);
  fireEvent.click(incrementButton);
  
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('1');
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText(/-/i);
  fireEvent.click(decrementButton);
  
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('-1');
  // Complete the unit test below based on the objective in the line above
});
