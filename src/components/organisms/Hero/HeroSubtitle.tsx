import { styled } from 'tsstyled';
import { useTheme } from '../../../styles/theme';
import { breakLaptop, breakTablet } from '../../../hooks/useResponsiveBreakpoint';

export default styled('h2').use(() => ({ theme: useTheme() }))`
  color: ${(props) => props.theme.color.heroSubtitle};
  opacity: 1;
  font-size: calc(${(props) => props.theme.size.heroSubtitleFont} * 0.5);
  font-weight: unset;
  margin: 0;

  ${breakTablet} {
    font-size: calc(${(props) => props.theme.size.heroSubtitleFont} * 0.6);
  }

  ${breakLaptop} {
    font-size: ${(props) => props.theme.size.heroSubtitleFont};
  }
`;
