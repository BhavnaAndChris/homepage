import { useEffect, useState } from 'react';

export default (): string => {
  const [hash, setHash] = useState(window.location.hash.replace(/^#/, ''));

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setHash(window.location.hash.replace(/^#/, ''));
    });
  });

  return hash;
};
