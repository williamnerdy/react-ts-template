import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Loading from './Loading';

export default {
  title: 'Loading',
  component: Loading
} as Meta;

export const Basic: Story = () => <Loading />;
