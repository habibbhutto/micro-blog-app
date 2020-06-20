import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import { BlogPostList } from './BlogPostList';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';

export default {
  component: BlogPostList,
  title: 'BlogPostList',
  decorators: [
    withKnobs,
    (story) => (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
      </Provider>
    ),
  ],
  excludeStories: /.*Data$/,
};

export const blogPostListData = [
  {
    id: '1',
    title: 'Test Blog Post',
    body:
      'The Redux API surface is tiny. Redux defines a set of contracts for you to implement (such as reducers) and provides a few helper functions to tie these contracts together.',
    updatedAt: '2020 Jan 12 09:25PM',
  },
  {
    id: '2',
    title: 'Dummy Blog Post',
    body:
      'The Redux API surface is tiny. Redux defines a set of contracts for you to implement (such as reducers) and provides a few helper functions to tie these contracts together.',
    updatedAt: '2020 Jan 12 09:25PM',
  },
];

const store = {
  getState: () => ({ posts: blogPostListData }),
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

const actions = {
  fetchAllPosts: action('fetchAllPosts'),
};

export const Default = () => (
  <BlogPostList posts={object('posts', [...blogPostListData])} {...actions} />
);
