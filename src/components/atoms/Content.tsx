import { styled } from 'tsstyled';
import { breakDesktop, breakLaptop, breakTablet, ResponsiveBreakpoint } from '../../hooks/useResponsiveBreakpoint';

export default styled('div', 'Content')`
  width: ${ResponsiveBreakpoint.mobile}px;
  ${breakTablet} {
    width: calc(${ResponsiveBreakpoint.tablet}px - 2rem);
  }
  ${breakLaptop} {
    width: calc(${ResponsiveBreakpoint.laptop}px - 4rem);
  }
  ${breakDesktop} {
    width: calc(${ResponsiveBreakpoint.desktop}px - 4rem);
  }
`;
