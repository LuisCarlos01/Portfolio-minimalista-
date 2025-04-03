import React, { useEffect } from 'react';
import '../styles/preloader.css';
import useGsapAnimations from '../hooks/useGsapAnimations';

const Preloader = () => {
  const { animatePreloader } = useGsapAnimations();

  useEffect(() => {
    animatePreloader();
  }, [animatePreloader]);

  return (
    <div className="preloader" id="preloader">
      <h1>•olá</h1>
    </div>
  );
};

export default Preloader; 