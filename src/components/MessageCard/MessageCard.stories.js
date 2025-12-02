import React from 'react';

import MessageCard from './MessageCard';

export default {
  component: MessageCard,
  title: 'MessageCard',
  // Our exports that end in 'Data' are not stories
  excludeStories: /.*Data$/,
};

export const messageData = {
  title: 'Something went wrong',
  message: 'Failed to load the post details',
};

export const Default = () => <MessageCard {...messageData} />;
