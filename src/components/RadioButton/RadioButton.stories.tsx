// src/components/social/RadioButton/RadioButton.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

export default {
  title: 'Components/Social/RadioButton',
  component: RadioButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof RadioButton>;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const GitHub = Template.bind({});
GitHub.args = {
  label: 'GitHub',
  state: 'primary',
  visible: true,
  backgroundColor: '#f0f0f0',
};

export const LinkedIn = Template.bind({});
LinkedIn.args = {
  label: 'LinkedIn',
  state: 'primary',
  visible: true,
  backgroundColor: '#0e76a8',
};

export const StackOverflow = Template.bind({});
StackOverflow.args = {
  label: 'Stack Overflow',
  state: 'primary',
  visible: true,
  backgroundColor: '#f48024',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  state: 'disabled',
  visible: true,
  backgroundColor: '#f0f0f0',
};