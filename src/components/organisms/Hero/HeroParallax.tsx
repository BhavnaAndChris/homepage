import { styled } from 'tsstyled';
import Parallax from '../../atoms/Parallax';

export default styled(Parallax).use(() => ({ $scaleHeight: 1.5 }))`
  position: absolute;
  height: 100%;
  width: 100%;
`;
