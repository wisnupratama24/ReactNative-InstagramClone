import React, { useState } from 'react';
import { Image } from 'react-native';

const ProgressiveImage = ({ source, styles, isStatic = false }) => {
  const [showDefaultImage, setDefaultImage] = useState(true);
  const setDefaultImageToFalse = () => {
    setDefaultImage((visible) => !visible);
  };
  return (
    <>
      <Image
        source={source}
        isStatic={isStatic}
        style={styles}
        onLoadEnd={setDefaultImageToFalse}
      />
      {showDefaultImage && (
        <Image
          source={require('../../../assets/default.png')}
          isStatic={isStatic}
          style={styles}
          onLoadEnd={setDefaultImageToFalse}
        />
      )}
    </>
  );
};

export default ProgressiveImage;
