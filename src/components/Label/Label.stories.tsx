import { Meta, StoryFn } from '@storybook/react'; // Correct import
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
  title: 'Components/Label',
  component: Label,
} as Meta<typeof Label>;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const About = Template.bind({});
About.args = {
  text: 'About Section',
  state: 'primary',
  visible: true,
  backgroundColor: '#f0f0f0',
};

export const Skills = Template.bind({});
Skills.args = {
  text: 'Skills Section',
  state: 'primary',
  visible: false,
  backgroundColor: '#f0f0f0',
};

export const Projects = Template.bind({});
Projects.args = {
  text: 'Projects Section',
  state: 'primary',
  visible: true,
  backgroundColor: '#f0f0f0',
};

export const Resume = Template.bind({});
Resume.args = {
  text: 'Resume Section',
  state: 'primary',
  visible: false,
  backgroundColor: '#f0f0f0',
};

export const ContactInformation = Template.bind({});
ContactInformation.args = {
  text: 'Contact Information',
  state: 'primary',
  visible: true,
  backgroundColor: '#f0f0f0',
};