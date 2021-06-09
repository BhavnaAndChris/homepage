import { createContext, ReactElement, ReactNode, Suspense, useContext, useEffect, useState } from 'react';

const Context = createContext(false);

export function useSuspended(): boolean {
  return useContext(Context);
}

export interface ISuspenseExProps {
  fallback: ReactElement | null;
  children?: ReactNode;
}

export default function SuspenseEx({ fallback, children }: ISuspenseExProps): ReactElement | null {
  const parentSuspended = useSuspended();
  const [suspended, setSuspended] = useState(false);

  return (
    <Suspense fallback={<FallbackWrapper setSuspended={setSuspended}>{fallback}</FallbackWrapper>}>
      <Context.Provider value={suspended || parentSuspended}>{children}</Context.Provider>
    </Suspense>
  );
}

function FallbackWrapper({
  setSuspended,
  children,
}: {
  setSuspended: (value: boolean) => void;
  children: ReactElement | null;
}): ReactElement | null {
  useEffect(() => {
    setSuspended(true);
    return () => setSuspended(false);
  }, [setSuspended]);

  return children;
}
