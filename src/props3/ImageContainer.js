// В файле ImageContainer.js
import React from 'react';

const ImageContainer = ({ children }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      {children}
    </div>
  );
};

export default ImageContainer;
