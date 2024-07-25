import { Meta, StoryFn } from '@storybook/react';
import HeroSection from './HeroSection';
import { HeroSectionProps } from './HeroSection.types';
import { within } from '@storybook/testing-library';


export default {
  title: 'Components/HeroSection',
  component: HeroSection,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof HeroSection>;

const Template: StoryFn<HeroSectionProps> = (args) => <HeroSection {...args} />;

export const Default = Template.bind({});
Default.args = {
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

export const Hidden = Template.bind({});
Hidden.args = {
  title: 'Hero Section Title',
  subtitle: 'Hero Section Subtitle',
  visible: false,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const title = canvas.getByText('Hero Section Title');
  const subtitle = canvas.getByText('Hero Section Subtitle');
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const title = canvas.queryByText('Hero Section Title');
  expect(title).toBeNull();
};

Hidden.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const title = canvas.queryByText('Hero Section Title');
  expect(title).toBeNull();
};
