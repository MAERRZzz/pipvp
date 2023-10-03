// В файле CustomizableImage.js
import React from 'react';

const CustomizableImage = ({ src, alt, style }) => {
  return (
    <img src={src} alt={alt} style={style} />
  );
};

export default CustomizableImage;
