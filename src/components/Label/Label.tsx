// src/components/Label/Label.tsx

import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const Label: React.FC<LabelProps> = ({ text, state, visible, backgroundColor }) => {
  return (
    <StyledLabel state={state} visible={visible} backgroundColor={backgroundColor}>
      {text}
    </StyledLabel>
  );
};

const StyledLabel = styled.div<{ state: 'primary' | 'disabled'; visible: boolean; backgroundColor?: string }>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  /* Add styles for the label based on primary state */
`;

export default Label;
