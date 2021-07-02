import { Dispatch, useEffect, useState, useMemo } from 'react';
import { useSuspended } from '../components/atoms/SuspenseEx';

export interface IParallax<TElement extends HTMLElement> {
  x: number;
  y: number;
  setElement: Dispatch<TElement | null>;
}

export default <TElement extends HTMLElement>(): IParallax<TElement> => {
  const [element, setElement] = useState<TElement | null>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const suspended = useSuspended();

  useEffect(() => {
    if (!element) {
      return;
    }

    const el = element;

    function update() {
      const { innerWidth, innerHeight } = window;
      const { left, width, top, height } = el.getBoundingClientRect();

      setX(Math.max(0, Math.min(1, (width + left) / (width + innerWidth))));
      setY(Math.max(0, Math.min(1, (height + top) / (height + innerHeight))));
    }

    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    update();

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [element, suspended]);

  return useMemo(() => ({ x, y, setElement }), [x, y, setElement]);
};
