'use client';
import { useState, useEffect } from 'react';

const MouseGradient = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(null);
  const [gradientStyle, setGradientStyle] = useState({
    background:
      'radial-gradient(600px circle at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)',
  });

  useEffect(() => {
    const updateGradient = (event) => {
      const { clientX, clientY } = event;
      setGradientStyle({
        background: `radial-gradient(600px circle at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      });
    };

    if (isSmallScreen) {
      setGradientStyle({
        background:
          'radial-gradient(600px circle at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)',
      });
    } else {
      document.addEventListener('mousemove', updateGradient);
    }

    return () => {
      document.removeEventListener('mousemove', updateGradient);
    };
  }, [isSmallScreen]);

  useEffect(() => {
    const updateDeviceWidth = () => {
      const isSmallScreenQuery =
        window.matchMedia('(max-width: 768px)').matches;
      setIsSmallScreen(isSmallScreenQuery);
    };

    updateDeviceWidth();

    const mediaQueryList = window.matchMedia('(max-width: 768px)');
    mediaQueryList.addEventListener('change', updateDeviceWidth);

    return () => {
      mediaQueryList.removeEventListener('change', updateDeviceWidth);
    };
  }, []);

  return (
    <div
      className='pointer-events-none fixed inset-0 z-30 transition duration-300'
      style={gradientStyle}
    ></div>
  );
};

export default MouseGradient;
