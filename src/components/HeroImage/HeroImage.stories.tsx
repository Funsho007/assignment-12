import { Meta, StoryFn } from '@storybook/react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    backgroundColor: { control: 'color' }, // Control for background color
  },
} as Meta<typeof HeroImage>;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'path/to/image.jpg',
  alt: 'Primary Image',
  visible: true,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  src: '',
  alt: 'Placeholder Image',
  visible: true,
  placeholder: 'No Image Available',
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'path/to/image.jpg',
  alt: 'Disabled Image',
  disabled: true,
  visible: true,
};

// Optional: Hidden state for completeness
export const Hidden = Template.bind({});
Hidden.args = {
  src: 'path/to/image.jpg',
  alt: 'Hidden Image',
  visible: false,
  backgroundColor: '#ff0000', // Example of changing background color
};
