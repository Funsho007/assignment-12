// src/components/social/RadioButton/RadioButton.types.ts

export interface RadioButtonProps {
  label: string;
  state: 'primary' | 'disabled';
  visible: boolean;
  backgroundColor?: string;
  onClick?: () => void;
}