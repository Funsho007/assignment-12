import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
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
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const link = canvas.getByText('Default Link');
  await userEvent.click(link);
};

export const Hover = Template.bind({});
Hover.args = {
  text: 'Hover Link',
  href: 'https://example.com',
  disabled: false,
};
Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const link = canvas.getByText('Hover Link');
  await userEvent.hover(link);
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Link',
  href: '#',
  disabled: true,
};
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const link = canvas.getByText('Disabled Link');
  // Do not perform any interaction as the link is disabled
  await new Promise((resolve) => setTimeout(resolve, 500)); // Just to simulate some delay
};
