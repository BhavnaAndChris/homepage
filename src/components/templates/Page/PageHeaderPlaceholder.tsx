import { styled } from 'tsstyled';
import pageChildStyle from './pageChildStyle';
import { useTheme } from '../../../styles/theme';

export default styled('div').use(() => ({ theme: useTheme() }))`
  ${pageChildStyle}
  flex: 0 0 auto;
  height: ${(props) => props.theme.size.headerHeight};
  width: 100%;
`;
