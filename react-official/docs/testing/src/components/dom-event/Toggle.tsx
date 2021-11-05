import React, { useState } from 'react';

type Props = {
  onChange: (state: boolean) => void;
};

export default function Toggle(props: Props) {
  const [state, setState] = useState(false);
  return (
    <button
      onClick={() => {
        setState((previousState) => !previousState);
        props.onChange(!state);
      }}
      data-testid="toggle"
    >
      {state === true ? 'Turn off' : 'Turn on'}
    </button>
  );
}
