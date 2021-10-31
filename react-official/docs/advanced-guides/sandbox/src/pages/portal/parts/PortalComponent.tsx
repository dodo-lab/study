import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

type Props = {
  children: React.ReactNode;
};

const portalRoot = document.getElementById('root-portal');

const PortalComponent: React.FC<Props> = ({ children }) => {
  const element = document.createElement('div');

  useEffect(() => {
    portalRoot?.appendChild(element);
    return () => {
      portalRoot?.removeChild(element);
    };
  }, [element]);

  return ReactDOM.createPortal(children, element);
};

export default PortalComponent;
