import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Header from './Header';

export default {
  title: 'Header',
  component: Header
} as Meta;

export const Basic: Story = () => <Header />;
