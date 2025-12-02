import React from 'react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import MainHeader from './MainHeader';

export default {
  component: MainHeader,
  title: 'MainHeader',
  decorators: [
    (story) => (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
      </Provider>
    ),
  ],
  // Our exports that end in 'Data' are not stories
  excludeStories: /.*Data$/,
};

const store = {
  getState: () => ({}),
  subscribe: () => 0,
  dispatch: action('dispatch'),
};
export const Default = () => <MainHeader />;
