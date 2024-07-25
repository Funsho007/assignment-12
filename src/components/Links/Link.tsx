import React from 'react';
import styled from 'styled-components';
import { LinkProps } from './Link.types';

const StyledLink = styled.a<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? '#888888' : '#0000EE')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  text-decoration: none;
  
  &:hover {
    text-decoration: ${(props) => (props.disabled ? 'none' : 'underline')};
  }
`;

const Link: React.FC<LinkProps> = ({ text, href, disabled }) => {
  return (
    <StyledLink href={disabled ? undefined : href} disabled={disabled}>
      {text}
    </StyledLink>
  );
};

export default Link;
