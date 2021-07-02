import { styled } from 'tsstyled';
import { useTheme } from '../../../theme';
import { breakLaptop, breakTablet } from '../../../hooks/useResponsiveBreakpoint';

export default styled('h1').use(() => ({ theme: useTheme() }))`
  white-space: nowrap;
  color: ${(props) => props.theme.color.heroTitle};
  font-family: ${(props) => props.theme.font.title};
  font-size: calc(${(props) => props.theme.size.heroTitleFont} * 0.4);
  font-weight: unset;
  margin: 0;

  ${breakTablet} {
    font-size: calc(${(props) => props.theme.size.heroTitleFont} * 0.6);
  }

  ${breakLaptop} {
    font-size: ${(props) => props.theme.size.heroTitleFont};
  }
`;
