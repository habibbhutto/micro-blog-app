import React from 'react';

import MainFooter from './MainFooter';

export default {
  component: MainFooter,
  title: 'MainFooter',
  // Our exports that end in 'Data' are not stories
  excludeStories: /.*Data$/,
};

export const Default = () => <MainFooter />;
