import React, { useEffect } from 'react';

type Props = {
  onSelect: (choise: number | null) => void;
};

export default function Card(props: Props) {
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      props.onSelect(null);
    }, 5000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [props]);

  return (
    <>
      {[1, 2, 3, 4].map((choice) => (
        <button
          key={choice}
          data-testid={choice}
          onClick={() => props.onSelect(choice)}
        >
          {choice}
        </button>
      ))}
    </>
  );
}
