import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders navigation bar', () => {
  const { getByText } = render(<App />);
  const homeElement = getByText(/Home/i);
  const aboutElement = getByText(/Home/i);
  const githubElement = getByText(/Home/i);

  expect(homeElement).toBeInTheDocument();
  expect(aboutElement).toBeInTheDocument();
  expect(githubElement).toBeInTheDocument();
});

test('renders footer', () => {
  const { container } = render(<App />);
  const footerCard = container.getElementsByClassName('.footer-card');

  expect(footerCard).not.toBeNull();
});

test('renders instructions', () => {
  const { getByText } = render(<App />);

  const fetchingMessage = getByText(/Fetching blog posts.../i);

  expect(fetchingMessage).toBeInTheDocument();
});
