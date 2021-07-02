import { useEffect, useState } from 'react';

export interface IScrollState {
  value: number;
  delta: number;
}

export default (from: 'top' | 'left' = 'top'): IScrollState => {
  const scrollProp = from === 'top' ? 'scrollTop' : 'scrollLeft';
  const [state, setState] = useState<IScrollState>({
    value: window.document.documentElement[scrollProp],
    delta: 0,
  });

  useEffect(() => {
    function onScroll() {
      setState((current) => ({
        value: window.document.documentElement[scrollProp],
        delta: window.document.documentElement[scrollProp] - current.value,
      }));
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return state;
};
