import { useEffect } from 'react';

export default (): void => {
  useEffect(() => {
    window.document.documentElement.scrollTop = 0;
    window.document.documentElement.scrollLeft = 0;
  }, []);
};
