import { useEffect, useState } from 'react';

export default (): number => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function update() {
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', update);
    update();

    return () => window.removeEventListener('resize', update);
  });

  return height;
};
