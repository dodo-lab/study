import { useCallback, useState } from 'react';

export function useClientRect() {
  const [rect, setRect] = useState<DOMRect>();

  const ref = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);

  return [rect, ref] as const;
}
