import React, { useState } from 'react';
import './FancyButton.css';

type Props = {
  isDisabled?: boolean;
  size: 'Big' | 'Small';
  text: string;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

export function FancyButton(props: Props) {
  const [toggled, setToggled] = useState(false);
  return (
    <button
      className={'Size-' + props.size}
      disabled={props.isDisabled || false}
      onClick={(event) => {
        setToggled(!toggled);
        props.onClick(event);
      }}
    >
      {props.text}
    </button>
  );
}
