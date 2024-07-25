/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Link from './Link';

describe('Link Component', () => {
  it('renders the link correctly', () => {
    render(<Link text="Test Link" href="https://example.com" />);
    
    const linkElement = screen.getByText('Test Link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
  });

  it('applies the disabled state correctly', () => {
    render(<Link text="Disabled Link" href="#" disabled={true} />);
    
    const linkElement = screen.getByText('Disabled Link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).not.toHaveAttribute('href');
    expect(linkElement).toHaveStyle('color: #888888');
    expect(linkElement).toHaveStyle('cursor: not-allowed');
    expect(linkElement).toHaveStyle('pointer-events: none');
  });
});
