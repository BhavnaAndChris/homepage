import { styled } from 'tsstyled';
import { animationFadeIn } from '../../styles/GlobalStyle';

export default styled('div', 'FadeIn')
  .props<{ $seconds?: number }>({ extend: true })
  .use(() => ({ $seconds: 1 }))`
    animation: ${animationFadeIn} ${(props) => props.$seconds ?? 1}s ease-in-out 100ms;
    animation-fill-mode: both;
  `;
