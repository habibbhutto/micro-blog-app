import React from 'react';

import BlogPost from './BlogPost';
import { MemoryRouter } from 'react-router-dom';

export default {
  component: BlogPost,
  title: 'BlogPost',
  decorators: [
    (story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>,
  ],
  // Our exports that end in 'Data' are not stories
  excludeStories: /.*Data$/,
};

export const blogPostData = {
  id: '1',
  title: 'Test Blog Post',
  body:
    'The Redux API surface is tiny. Redux defines a set of contracts for you to implement (such as reducers) and provides a few helper functions to tie these contracts together.',
  updatedAt: '2020 Jan 12 09:25PM',
};

export const Default = () => (
  <BlogPost post={{ ...blogPostData }} />
);
