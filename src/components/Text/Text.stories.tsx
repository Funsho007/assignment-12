import { Meta, StoryFn } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  text: 'Small Text',
  size: 'small',
  backgroundColor: '#ffffff',
  color: '#000000',
  visible: true,
  disabled: false,
  bold: false,
};

export const Medium = Template.bind({});
Medium.args = {
  text: 'Medium Text',
  size: 'medium',
  backgroundColor: '#ffffff',
  color: '#000000',
  visible: true,
  disabled: false,
  bold: false,
};

export const Large = Template.bind({});
Large.args = {
  text: 'Large Text',
  size: 'large',
  backgroundColor: '#ffffff',
  color: '#000000',
  visible: true,
  disabled: false,
  bold: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Text',
  size: 'medium',
  backgroundColor: '#d3d3d3',
  color: '#000000',
  visible: true,
  disabled: true,
  bold: false,
};

export const Bold = Template.bind({});
Bold.args = {
  text: 'Bold Text',
  size: 'medium',
  backgroundColor: '#ffffff',
  color: '#000000',
  visible: true,
  disabled: false,
  bold: true,
};

// Interaction tests
Small.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const text = canvas.getByText('Small Text');
  expect(text).toBeInTheDocument();
  expect(text).toBeVisible();
};

Medium.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const text = canvas.getByText('Medium Text');
  expect(text).toBeInTheDocument();
  expect(text).toBeVisible();
};

Large.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const text = canvas.getByText('Large Text');
  expect(text).toBeInTheDocument();
  expect(text).toBeVisible();
};

Disabled.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const text = canvas.getByText('Disabled Text');
  expect(text).toBeInTheDocument();
  expect(text).toBeVisible();
};

Bold.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const text = canvas.getByText('Bold Text');
  expect(text).toBeInTheDocument();
  expect(text).toBeVisible();
};
