import { styled } from 'tsstyled';
import { useTheme } from '../../../theme';
import { breakLaptop } from '../../../hooks/useResponsiveBreakpoint';

export default styled('div').use(() => ({ theme: useTheme() }))`
  position: relative;
  height: 1.5em;
  line-height: 1.5em;
  margin: 0 0.5em;
  white-space: nowrap;

  ${breakLaptop} {
    &:after {
      content: '';
      position: absolute;
      display: block;
      height: ${(props) => props.theme.size.pivotLine};
      left: 50%;
      right: 50%;
      bottom: 0;
      color: ${(props) => props.theme.color.pivotText};
      background: ${(props) => props.theme.color.pivotLine};
      transition: opacity 0.5s, left 0.5s, right 0.5s;
      opacity: 0;
      pointer-events: none;
    }

    &:hover:after {
      opacity: 1;
      left: 0;
      right: 0;
    }
  }
`;
