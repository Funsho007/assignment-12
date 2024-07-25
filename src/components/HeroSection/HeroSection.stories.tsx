import { Meta, StoryFn } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import HeroSection from './HeroSection';
import { HeroSectionProps } from './HeroSection.types';

export default {
  title: 'Components/HeroSection',
  component: HeroSection,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof HeroSection>;

const Template: StoryFn<HeroSectionProps> = (args: HeroSectionProps) => <HeroSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Hero Section Title',
  subtitle: 'Hero Section Subtitle',
  visible: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Hero Section Title',
  subtitle: 'Hero Section Subtitle',
  visible: true,
  disabled: true,
  backgroundColor: '#d3d3d3', // greyed out background
};

// Interaction tests
Primary.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const title = canvas.getByText('Hero Section Title');
  const subtitle = canvas.getByText('Hero Section Subtitle');
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
  expect(title).toBeVisible();
  expect(subtitle).toBeVisible();
};

Disabled.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const title = canvas.queryByText('Hero Section Title');
  const subtitle = canvas.queryByText('Hero Section Subtitle');
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
  expect(title).not.toBeVisible();
  expect(subtitle).not.toBeVisible();
};
