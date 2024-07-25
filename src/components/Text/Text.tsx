import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '12px';
      case 'medium':
        return '16px';
      case 'large':
        return '20px';
      default:
        return '16px';
    }
  }};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  color: ${({ color }) => color || 'black'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  transition: background-color 0.3s ease, opacity 0.3s ease;

  @media (max-width: 768px) {
    font-size: ${({ size }) => {
      switch (size) {
        case 'small':
          return '10px';
        case 'medium':
          return '14px';
        case 'large':
          return '18px';
        default:
          return '14px';
      }
    }};
  }
`;

const Text: React.FC<TextProps> = ({
    text,
    size,
    bold,
    backgroundColor,
    color,
    visible,
    disabled,
  }) => {
    return (
      <StyledText
        text={text} // Add this line
        size={size}
        bold={bold}
        backgroundColor={backgroundColor}
        color={color}
        visible={visible}
        disabled={disabled}
      >
        {text}
      </StyledText>
    );
  };

export default Text;
