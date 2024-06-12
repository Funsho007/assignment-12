// src/components/social/RadioButton/RadioButton.tsx

import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const RadioButton: React.FC<RadioButtonProps> = ({ label, state, visible, backgroundColor, onClick }) => {
  return (
    <StyledRadioButtonWrapper visible={visible} state={state}>
      <StyledRadioButton 
        type="radio" 
        state={state} 
        backgroundColor={backgroundColor} 
        onClick={state !== 'disabled' ? onClick : undefined}
        disabled={state === 'disabled'}
      />
      <StyledLabel state={state}>{label}</StyledLabel>
    </StyledRadioButtonWrapper>
  );
};

const StyledRadioButtonWrapper = styled.div<{ visible: boolean, state: string }>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  align-items: center;
  cursor: ${(props) => (props.state === 'disabled' ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.state === 'disabled' ? 0.6 : 1)};
`;

const StyledRadioButton = styled.input<{ state: string, backgroundColor?: string }>`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #007bff;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${(props) => props.backgroundColor || '#fff'};
  position: relative;

  &:checked::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background: #007bff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    background-color: ${(props) => (props.state !== 'disabled' ? '#e0e0e0' : '')};
  }
`;

const StyledLabel = styled.label<{ state: string }>`
  color: ${(props) => (props.state === 'disabled' ? '#ccc' : '#333')};
`;

export default RadioButton;