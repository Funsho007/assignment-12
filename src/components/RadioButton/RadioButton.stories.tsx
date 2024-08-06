import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './Radio.types';

export default {
  title: 'Components/Social/RadioButton',
  component: RadioButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof RadioButton>;

const Template: StoryFn<RadioButtonProps> = (args: RadioButtonProps) => <RadioButton {...args} />;

export const GitHub = Template.bind({});
GitHub.args = {
  label: 'GitHub',
  state: 'primary',
  visible: true,
  backgroundColor: '#f0f0f0',
};
GitHub.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const radioButton = canvas.getByLabelText('GitHub');
  await userEvent.click(radioButton);
};

export const LinkedIn = Template.bind({});
LinkedIn.args = {
  label: 'LinkedIn',
  state: 'primary',
  visible: true,
  backgroundColor: '#0e76a8',
};
LinkedIn.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const radioButton = canvas.getByLabelText('LinkedIn');
  await userEvent.click(radioButton);
};

export const StackOverflow = Template.bind({});
StackOverflow.args = {
  label: 'Stack Overflow',
  state: 'primary',
  visible: true,
  backgroundColor: '#f48024',
};
StackOverflow.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const radioButton = canvas.getByLabelText('Stack Overflow');
  await userEvent.click(radioButton);
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  state: 'disabled',
  visible: true,
  backgroundColor: '#f0f0f0',
};
Disabled.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const radioButton = canvas.getByLabelText('Disabled');
  // No interaction as it is disabled
  await new Promise((resolve) => setTimeout(resolve, 500)); // Just to simulate some delay
};
