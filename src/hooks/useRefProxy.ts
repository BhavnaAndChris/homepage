import { MutableRefObject, Ref, RefObject, useMemo } from 'react';

export default function useRefProxy<T>(ref?: Ref<T>, onChange?: (instance: T | null) => void): RefObject<T> {
  let current: T | null = null;

  return useMemo(
    () => ({
      get current(): T | null {
        return current;
      },
      set current(value: T | null) {
        current = value;
        onChange?.(value);

        if (typeof ref === 'function') {
          ref(value);
        } else if (ref) {
          (ref as MutableRefObject<T | null>).current = value;
        }
      },
    }),
    [],
  );
}
