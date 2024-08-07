import React from 'react';
import { SectionProps } from './Section.types';

const Section: React.FC<SectionProps> = ({ title, content, backgroundColor, color, visible, disabled }) => {
  if (!visible) {
    return null;
  }

  return (
    <section
      style={{
        backgroundColor,
        color,
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <h1>{title}</h1>
      <p>{content}</p>
    </section>
  );
};

export default Section;
