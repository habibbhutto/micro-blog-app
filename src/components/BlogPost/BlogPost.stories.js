import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import BlogPost from './BlogPost';
import { MemoryRouter } from 'react-router';

export default {
  component: BlogPost,
  title: 'BlogPost',
  decorators: [
    withKnobs,
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
  <BlogPost post={object('post', { ...blogPostData })} />
);
