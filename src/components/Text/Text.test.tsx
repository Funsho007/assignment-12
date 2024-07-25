/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Text from './Text';
import { TextProps } from './Text.types';

describe('Text Component', () => {
  it('renders the Text component with given props', () => {
    const props: TextProps = {
      text: 'Test Text',
      size: 'medium',
      bold: true,
      backgroundColor: '#ffffff',
      color: '#000000',
      visible: true,
      disabled: false,
    };

    render(<Text {...props} />);

    const textElement = screen.getByText('Test Text');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
    expect(textElement).toHaveStyle('font-size: 16px');
    expect(textElement).toHaveStyle('font-weight: bold');
    expect(textElement).toHaveStyle('background-color: #ffffff');
    expect(textElement).toHaveStyle('color: #000000');
  });
});
