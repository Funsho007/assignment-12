// HeroImage.tsx
import React from 'react';
import styled from 'styled-components';

export interface HeroImageProps {
  src?: string;
  alt?: string;
  placeholder?: string;
  disabled?: boolean;
  visible?: boolean; // Add visible prop
  backgroundColor?: string; // Add backgroundColor prop
}

const ImageContainer = styled.div<{ visible?: boolean }>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  width: 100%;
  text-align: center;
  margin: 20px 0;
`;

const StyledImage = styled.img<{ backgroundColor?: string }>`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor}; // Apply background color here
`;

const Placeholder = styled.div<{ backgroundColor?: string }>`
  width: 100%;
  height: 300px;
  background-color: ${(props) => props.backgroundColor || '#e0e0e0'}; // Apply background color here
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #757575;
  font-size: 18px;
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt = 'Hero Image', placeholder = 'No Image Available', disabled = false, visible = true, backgroundColor }) => {
  if (disabled) {
    return null;
  }

  return (
    <ImageContainer visible={!disabled && visible}>
      {src ? (
        <StyledImage src={src} alt={alt} backgroundColor={backgroundColor} />
      ) : (
        <Placeholder backgroundColor={backgroundColor}>{placeholder}</Placeholder>
      )}
    </ImageContainer>
  );
};

export default HeroImage;
