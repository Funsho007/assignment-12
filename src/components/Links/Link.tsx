import React from 'react';
import styled from 'styled-components';
import { LinkProps } from './Link.types';

const StyledLink = styled.a<LinkProps>`
  color: ${(props) => (props.disabled ? '#888888' : props.color || '#007bff')};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  text-decoration: none;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    color: ${(props) => (!props.disabled ? props.hoverColor || '#0056b3' : '#888888')};
  }
`;

const Link: React.FC<LinkProps> = ({ text, href, ...props }) => {
  return (
    <StyledLink href={props.disabled ? undefined : href} {...props}>
      {text}
    </StyledLink>
  );
};

export default Link;
