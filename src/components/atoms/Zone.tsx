import {
  ReactElement,
  useState,
  useEffect,
  ReactHTML,
  HTMLAttributes,
  forwardRef,
  ForwardedRef,
  useCallback,
  DetailedHTMLFactory,
  createElement,
} from 'react';
import useLocationHash from '../../hooks/useLocationHash';
import { useSuspended } from './SuspenseEx';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ElementType<T> = T extends DetailedHTMLFactory<any, infer E> ? E : HTMLElement;

export interface ISemanticProps<TTag extends keyof ReactHTML> extends HTMLAttributes<ElementType<TTag>> {
  tag: TTag;
}

function Zone<TTag extends keyof ReactHTML>(
  { id, tag, children, ...attributes }: ISemanticProps<TTag>,
  ref: ForwardedRef<ElementType<TTag>>,
): ReactElement {
  const suspended = useSuspended();
  const [el, setEl] = useState<HTMLElement | null>(null);
  const hash = useLocationHash();

  const handleRef = useCallback(
    (element: ElementType<TTag> | null) => {
      setEl(element);

      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    },
    [ref],
  );

  useEffect(() => {
    if (
      window.document.documentElement.scrollTop === 0 &&
      window.document.documentElement.scrollLeft === 0 &&
      !suspended &&
      el &&
      id === hash
    ) {
      el.scrollIntoView();
    }
  }, [id, suspended, el, hash]);

  return createElement(tag, { ...attributes, id, ref: handleRef }, children);
}

export default forwardRef(Zone);
