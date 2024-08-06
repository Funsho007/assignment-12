/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Section from './Section';
import { SectionProps } from './Section.types';

describe('Section Component', () => {
  it('renders the Section with title and content', () => {
    const props: SectionProps = {
      title: 'Test Section Title',
      content: 'This is the section content.',
      backgroundcolor: '#ffffff',
      color: '#000000',
      visible: true,
      disabled: false,
    };

    render(<Section {...props} />);

    const title = screen.getByText('Test Section Title');
    const content = screen.getByText('This is the section content.');

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(title).toBeVisible();
    expect(content).toBeVisible();
  });
});
