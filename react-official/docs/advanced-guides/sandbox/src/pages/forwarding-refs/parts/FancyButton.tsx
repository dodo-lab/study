import React from 'react';

type Props = {
  children: React.ReactNode;
};

type Ref = HTMLButtonElement;

const FancyButton = React.forwardRef<Ref, Props>(({ children }, ref) => (
  <button ref={ref}>{children}</button>
));

export default FancyButton;
