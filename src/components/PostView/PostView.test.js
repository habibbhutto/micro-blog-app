import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { PostView } from './PostView';

test('renders something wrong on error', async () => {
  const props = {
    match: { params: { id: 1 } },
    post: { error: { message: 'dummy error' } },
    fetchPostDetails: jest.fn(),
    fetchPostComments: jest.fn(),
  };
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <PostView {...props} />
    </MemoryRouter>
  );

  const readingButton = getByText(/Something went wrong/i);
  expect(readingButton).toBeInTheDocument();
});

test('renders fetching blog post', async () => {
  const props = {
    match: { params: { id: 1 } },
    post: null,
    fetchPostDetails: jest.fn(),
    fetchPostComments: jest.fn(),
  };
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <PostView {...props} />
    </MemoryRouter>
  );

  const readingButton = getByText(/Fetching blog post/i);
  expect(readingButton).toBeInTheDocument();
});
