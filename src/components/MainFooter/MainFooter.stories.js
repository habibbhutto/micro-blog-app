import React from 'react';
import { withKnobs } from '@storybook/addon-knobs/react';

import MainFooter from './MainFooter';

export default {
  component: MainFooter,
  title: 'MainFooter',
  decorators: [withKnobs],
  // Our exports that end in 'Data' are not stories
  excludeStories: /.*Data$/,
};

export const Default = () => <MainFooter />;
