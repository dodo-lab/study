import React, { useEffect, useRef } from 'react';
import FancyButton from './parts/FancyButton';

const ForwardingRefsPage: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    alert('Click');
  };

  useEffect(() => {
    buttonRef.current?.removeEventListener('click', handleClick);
    buttonRef.current?.addEventListener('click', handleClick);
  }, [buttonRef]);

  return (
    <>
      <FancyButton ref={buttonRef}>Click me!</FancyButton>
    </>
  );
};

export default ForwardingRefsPage;
