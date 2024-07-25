import { Meta, StoryFn } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Section from './Section';
import { SectionProps } from './Section.types';

export default {
  title: 'Components/Section',
  component: Section,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta<typeof Section>;

const Template: StoryFn<SectionProps> = (args) => <Section {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary Section Title',
  content: 'This is the primary section content.',
  backgroundColor: '#ffffff',
  color: '#000000',
  visible: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Section Title',
  content: 'This is the disabled section content.',
  backgroundColor: '#d3d3d3', // greyed out background
  color: '#000000',
  visible: true,
  disabled: true,
};

// Interaction tests
Primary.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const title = canvas.getByText('Primary Section Title');
  const content = canvas.getByText('This is the primary section content.');
  expect(title).toBeInTheDocument();
  expect(content).toBeInTheDocument();
  expect(title).toBeVisible();
  expect(content).toBeVisible();
};

Disabled.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const title = canvas.getByText('Disabled Section Title');
  const content = canvas.getByText('This is the disabled section content.');
  expect(title).toBeInTheDocument();
  expect(content).toBeInTheDocument();
  expect(title).toBeVisible();
  expect(content).toBeVisible();
};
