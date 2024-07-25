/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  it('renders and is visible when visible prop is true', () => {
    render(<HeroImage src="test.jpg" alt="Hero Image" visible={true} />);

    const image = screen.getByAltText('Hero Image');
    expect(image).toBeInTheDocument();
    expect(image).toBeVisible();
  });
});
