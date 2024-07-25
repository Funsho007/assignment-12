import React from 'react';
import styled from 'styled-components';
import { HeroSectionProps } from './HeroSection.types';

const Section = styled.section<{ backgroundColor?: string; $disabled?: boolean }>`
  display: ${({ $disabled }) => ($disabled ? 'none' : 'block')};
  background-color: ${({ backgroundColor }) => backgroundColor || '#ffffff'};
  padding: 20px;
  text-align: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, backgroundColor, disabled, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <Section backgroundColor={backgroundColor} $disabled={disabled}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Section>
  );
};

export default HeroSection;
