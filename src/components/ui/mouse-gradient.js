'use client';
import { useState, useEffect } from 'react';

const MouseGradient = () => {
  const [gradientStyle, setGradientStyle] = useState({
    background:
      'radial-gradient(600px at 703px 502px, rgba(29, 78, 216, 0.15), transparent 80%)',
  });

  useEffect(() => {
    const updateGradient = (event) => {
      const { clientX, clientY } = event;
      setGradientStyle({
        background: `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      });
    };

    document.addEventListener('mousemove', updateGradient);

    return () => {
      document.removeEventListener('mousemove', updateGradient);
    };
  }, []);

  return (
    <div
      className='pointer-events-none inset-0 z-30 transition duration-300 hidden lg:block lg:fixed'
      style={gradientStyle}
    ></div>
  );
};

export default MouseGradient;
