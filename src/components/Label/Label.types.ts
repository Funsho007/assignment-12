// src/components/Label/Label.types.tsx

export interface LabelProps {
    text: string;
    state: 'primary' | 'disabled';
    visible: boolean;
    backgroundColor?: string;
  }
  