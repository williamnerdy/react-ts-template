import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import NavMenuLink, { Props } from './NavMenuLink';

export default {
  title: 'NavMenuLink',
  component: NavMenuLink
} as Meta;

export const Basic: Story<Props> = (args) => <NavMenuLink {...args} />;

Basic.args = {
  url: '/',
  children: 'Link content'
};
