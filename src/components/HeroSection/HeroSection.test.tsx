/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';
import { HeroSectionProps } from './HeroSection.types';

describe('HeroSection Component', () => {
  it('renders and is visible when visible prop is true', () => {
    const props: HeroSectionProps = {
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      visible: true,
    };

    render(<HeroSection {...props} />);

    const titleElement = screen.getByText('Test Title');
    const subtitleElement = screen.getByText('Test Subtitle');

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
    expect(titleElement).toBeVisible();
    expect(subtitleElement).toBeVisible();
  });
});
