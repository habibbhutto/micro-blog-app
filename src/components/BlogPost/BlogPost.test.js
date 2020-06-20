import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import BlogPost from './BlogPost';

test('renders blog post with continue reading button', async () => {
  const post = {
    id: 'dummyId',
    title: 'dummy title',
    body: 'dummy body',
    updatedAt: 'dummyDateValue',
  };
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <BlogPost post={post} />
    </MemoryRouter>
  );

  const readingButton = getByText(/Continue Reading/i);
  expect(readingButton).toBeInTheDocument();
});

test('renders title without continue reading button', async () => {
  const post = {
    title: 'dummy title',
    body: 'dummy body',
    updatedAt: 'dummyDateValue',
  };
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <BlogPost post={post} />
    </MemoryRouter>
  );

  const readingButton = container.getElementsByClassName('.continue-button');
  expect(readingButton.length).toBeFalsy();
});
