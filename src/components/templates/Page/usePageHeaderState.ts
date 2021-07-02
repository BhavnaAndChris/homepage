import { Dispatch, useEffect, useMemo, useState } from 'react';
import useOnScreen from '../../../hooks/useOnScreen';
import useWindowScrollTop from '../../../hooks/useWindowScrollTop';

export default (): { isVisible: boolean; setPlaceholder: Dispatch<HTMLDivElement> } => {
  const scrollTop = useWindowScrollTop();
  const [isHeaderOnScreen, setPlaceholder] = useOnScreen<HTMLDivElement>();
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    if (isHeaderOnScreen) {
      setVisible(true);
    } else if (scrollTop.delta > 2) {
      setVisible(false);
    } else if (scrollTop.delta < -4) {
      setVisible(true);
    }
  }, [isHeaderOnScreen, scrollTop.delta]);

  return useMemo(() => ({ isVisible, setPlaceholder }), [isVisible, setPlaceholder]);
};
