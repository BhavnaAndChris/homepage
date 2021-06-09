import { ReactElement, ReactNode, useCallback, useEffect, useState } from 'react';
import { css, Style, Styled } from 'react-css-in-js';
import SuspenseEx from './SuspenseEx';

export interface IFadeInProps {
  seconds?: number;
  className?: string;
  children?: ReactNode;
  onAnimationEnd?: () => void;
}

export default function FadeIn({ seconds = 1, className, children, onAnimationEnd }: IFadeInProps): ReactElement {
  const [end, setEnd] = useState(false);
  const handleAnimationEnd = useCallback(() => setEnd(true), []);

  useEffect(() => {
    end && onAnimationEnd?.();
  }, [end]);

  return (
    <>
      <Style>
        {css`
          @keyframes fade-in__keyframes {
            from {
              opacity: 0;
            }
            to {
              opacity: 100%;
            }
          }
        `}
      </Style>
      <SuspenseEx fallback={null}>
        <Styled className={className}>
          {css`
            animation: fade-in__keyframes ${seconds}s ease-in-out 100ms;
            animation-fill-mode: both;
          `}
          <div onAnimationEnd={handleAnimationEnd}>{children}</div>
        </Styled>
      </SuspenseEx>
    </>
  );
}
