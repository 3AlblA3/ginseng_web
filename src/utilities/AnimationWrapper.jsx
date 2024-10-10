// AnimationWrapper.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setupScrollAnimation, cleanupScrollAnimation } from './animateOnScroll';

const AnimationWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    setupScrollAnimation();

    return () => {
      cleanupScrollAnimation();
    };
  }, [location]);

  return <>{children}</>;
};

export default AnimationWrapper;