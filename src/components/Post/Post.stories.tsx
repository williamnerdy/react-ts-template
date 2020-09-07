import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Post, { Props } from './Post';

export default {
  title: 'Post',
  component: Post
} as Meta;

export const Basic: Story<Props> = (args) => <Post {...args} />;

Basic.args = {
  title: 'Post title',
  body: 'Post body'
};
