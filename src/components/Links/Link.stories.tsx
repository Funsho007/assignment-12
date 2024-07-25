import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Link from './Link';
import { LinkProps } from './Link.types';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    text: { control: 'text' },
    href: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Link>;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default Link',
  href: 'https://example.com',
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  text: 'Hover Link',
  href: 'https://example.com',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Link',
  href: '#',
  disabled: true,
};
