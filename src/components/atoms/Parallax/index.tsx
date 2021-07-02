import { styled } from 'tsstyled';
import ParallaxContent from './ParallaxContent';
import useParallax from '../../../hooks/useParallax';
import useRefProxy from '../../../hooks/useRefProxy';

export default styled('div', 'Parallax')
  .props<{ $scaleHeight?: number; $scaleWidth?: number }>({ extend: true })
  .use(() => ({ parallax: useParallax<HTMLDivElement>() }))
  .set(({ $scaleHeight, $scaleWidth, parallax, ref, children }) => ({
    ref: useRefProxy(ref, parallax.setElement),
    children: (
      <ParallaxContent $scaleHeight={$scaleHeight} $scaleWidth={$scaleWidth} $x={parallax.x} $y={parallax.y}>
        {children}
      </ParallaxContent>
    ),
  }))`
    position: relative;
    overflow: hidden;
  `;
