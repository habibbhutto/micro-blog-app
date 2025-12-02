import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { BlogPostList } from './BlogPostList';

test('renders fetching blog posts', async () => {
  const props = {
    fetchAllPosts: jest.fn(),
  };
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <BlogPostList {...props} />
    </MemoryRouter>
  );

  const loadingMessage = getByText(/Fetching blog posts.../i);
  expect(loadingMessage).toBeInTheDocument();
});

test('renders something went wrong on error', async () => {
  const props = {
    posts: { error: { message: 'dummy error' } },
    fetchAllPosts: jest.fn(),
  };
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <BlogPostList {...props} />
    </MemoryRouter>
  );

  const errorTitle = getByText(/Something went wrong/i);
  const errorMessage = getByText(/dummy error/i);
  expect(errorTitle).toBeInTheDocument();
  expect(errorMessage).toBeInTheDocument();
});

test('renders no blog posts message', async () => {
  const props = {
    posts: [],
    fetchAllPosts: jest.fn(),
  };
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <BlogPostList {...props} />
    </MemoryRouter>
  );

  const noBlogPostsMessage = getByText(/No blog posts today/i);
  expect(noBlogPostsMessage).toBeInTheDocument();
});
