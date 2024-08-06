import React from 'react';
import styled from 'styled-components';
import { SectionProps } from './Section.types';

const StyledSection = styled.section<SectionProps>`
  padding: 20px;
  background-color: ${({ backgroundcolor }) => backgroundcolor || 'white'};
  color: ${({ color }) => color || 'black'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  transition: background-color 0.3s ease, opacity 0.3s ease;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Section: React.FC<SectionProps> = ({
  title,
  content,
  backgroundcolor,
  color,
  visible,
  disabled,
}) => {

  return (
    <StyledSection title={title} content={content} backgroundcolor={backgroundcolor} color={color} visible={visible} disabled={disabled}>
      <h1>{title}</h1>
      <p>{content}</p>
    </StyledSection>
  );
};

export default Section;
