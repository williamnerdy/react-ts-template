import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Footer from './Footer';

export default {
  title: 'Footer',
  component: Footer
} as Meta;

export const Basic: Story = () => <Footer />;
