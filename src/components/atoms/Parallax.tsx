import { ReactElement, ReactNode } from 'react';
import { css, Styled } from 'react-css-in-js';
import useParallax from '../../hooks/useParallax';

export interface IParallaxProps {
  className?: string;
  scaleHeight?: number;
  scaleWidth?: number;
  children?: ReactNode;
}

export default function Parallax({
  className,
  scaleHeight = 1,
  scaleWidth = 1,
  children,
}: IParallaxProps): ReactElement {
  const [ref, parallax] = useParallax<HTMLDivElement>();

  return (
    <Styled>
      {css`
        position: relative;
        overflow: hidden;

        .parallax__shift {
          position: absolute;
        }
      `}
      <div className={className} ref={ref}>
        <div
          className={'parallax__shift'}
          style={{
            top: `${(scaleHeight - 1) * parallax.y * -100}%`,
            bottom: `${(scaleHeight - 1) * (parallax.y - 1) * 100}%`,
            left: `${(scaleWidth - 1) * parallax.x * -100}%`,
            right: `${(scaleWidth - 1) * (parallax.x - 1) * 100}%`,
          }}
        >
          {children}
          <div />
        </div>
      </div>
    </Styled>
  );
}
