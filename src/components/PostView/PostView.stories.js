import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';

import PostView from './PostView';

export default {
  component: PostView,
  title: 'PostView',
  decorators: [
    withKnobs,
    (story) => (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
      </Provider>
    ),
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

export const commentsData = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body:
      'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  },
  {
    postId: 1,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body:
      'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  },
];

const store = {
  getState: () => ({ activePost: blogPostData, comments: commentsData }),
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

const actions = {
  fetchPostDetails: action('fetchAllPosts'),
};

const routerParam = { params: { id: 1 } };

export const Default = () => (
  <PostView
    post={object('post', { ...blogPostData })}
    match={routerParam}
    {...actions}
  />
);
