import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import CommentBox from './CommentBox';

export default {
  component: CommentBox,
  title: 'CommentBox',
  decorators: [withKnobs],
  // Our exports that end in 'Data' are not stories
  excludeStories: /.*Data$/,
};

export const commentData = {
  postId: 1,
  id: 1,
  name: 'id labore ex et quam laborum',
  email: 'Eliseo@gardner.biz',
  body:
    'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
};

export const Default = () => (
  <CommentBox comment={object('comment', { ...commentData })} />
);
