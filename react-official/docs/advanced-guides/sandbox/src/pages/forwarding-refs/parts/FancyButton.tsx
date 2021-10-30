import React from 'react';

type Props = {
  children: React.ReactNode;
};

type Ref = HTMLButtonElement;

// functionにすると、DevTools上で名前が表示されるようになる
const FancyButton = React.forwardRef<Ref, Props>(function FancyButton(
  { children },
  ref
) {
  return <button ref={ref}>{children}</button>;
});

export default FancyButton;
