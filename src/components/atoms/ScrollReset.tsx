import { useEffect } from 'react';

export default function ScrollReset(): null {
  useEffect(() => {
    window.document.documentElement.scrollTop = 0;
    window.document.documentElement.scrollLeft = 0;
  }, []);

  return null;
}
