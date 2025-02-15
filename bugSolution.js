import React from 'react';
import { Image } from 'expo-image';

const MyImage = ({uri}) => {
  const handleError = (error) => {
    console.error('Image loading error:', error);
    // Optionally display a placeholder image here
  };

  return (
    <Image
      source={{ uri }}
      style={{ width: 200, height: 200 }}
      onError={handleError}
    />
  );
};

export default MyImage;