import { Dispatch, useEffect, useState } from 'react';
import { useSuspended } from '../components/atoms/SuspenseEx';

export interface IOnScreenOptions {
  distance?: number;
}

export default <TElement extends HTMLElement>({ distance = 0 }: IOnScreenOptions = {}): [
  boolean,
  Dispatch<TElement>,
] => {
  const [element, setElement] = useState<TElement | null>(null);
  const [onScreen, setOnScreen] = useState(false);
  const suspended = useSuspended();

  useEffect(() => {
    if (!element) {
      return;
    }

    const el = element;

    function update() {
      const { clientHeight, clientWidth } = window.document.documentElement;
      const { top, height, left, width } = el.getBoundingClientRect();
      const inWidth = top + height + distance > 0 && top - distance < clientHeight;
      const inHeight = left + width + distance > 0 && left - distance < clientWidth;

      setOnScreen(inWidth && inHeight);
    }

    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [element, suspended]);

  return [onScreen, setElement];
};
