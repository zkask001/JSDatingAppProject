import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from '../components/HelloWorld';
import '@testing-library/jest-dom';

test('renders hello world text', () => {
  render(<HelloWorld />);
  const helloWorldElement = screen.getByText(/hello, world/i);
  expect(helloWorldElement).toBeInTheDocument();
});