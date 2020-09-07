import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import User, { Props } from './User';

export default {
  title: 'User',
  component: User
} as Meta;

export const Basic: Story<Props> = (args) => <User {...args} />;

Basic.args = {
  name: 'Basic name',
  email: 'basic@email.com'
};
