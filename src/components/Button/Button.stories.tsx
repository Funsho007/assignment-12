import { Meta, StoryFn } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "WebComponent/Button",
  component: Button,
  argTypes: {
    disabledBackgroundColor: { control: "color" },
  },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const ButtonPrimaryTest = Template.bind({});
ButtonPrimaryTest.args = {
  disabled: false,
  label: "Test",
  visible: true,
};
ButtonPrimaryTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText("Test");
  await userEvent.click(button);
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Test",
  visible: true,
  disabledBackgroundColor: "lightgray",
};
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText("Test");
  await userEvent.click(button);
};
