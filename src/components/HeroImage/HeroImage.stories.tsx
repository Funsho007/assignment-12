// HeroImage.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types'; // Assuming you have a separate file for types

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
} as Meta<typeof HeroImage>;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'path/to/image.jpg',
  alt: 'Primary Image',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  src: '',
  alt: 'Placeholder Image',
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'path/to/disabled.jpg',
  alt: 'Disabled Image',
  disabled: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  src: 'path/to/image.jpg',
  alt: 'Hidden Image',
  visible: false,
  backgroundColor: '#ff0000', // Example of changing background color
};