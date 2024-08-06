import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './Radio.types';

const StyledRadioButton = styled.input.attrs({ type: 'radio' })<{ disabled?: boolean }>`
  margin: 0 8px 0 0;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, state, visible = true, backgroundColor }) => {
  if (!visible) {
    return null;
  }

  return (
    <label style={{ backgroundColor }}>
      <StyledRadioButton disabled={state === 'disabled'} aria-label={label} />
      {label}
    </label>
  );
};

export default RadioButton;
