import { styled } from 'tsstyled';
import pageChildStyle from './pageChildStyle';
import { useTheme } from '../../../theme';

export default styled('div').use(() => ({ theme: useTheme() }))`
  ${pageChildStyle}
`;
