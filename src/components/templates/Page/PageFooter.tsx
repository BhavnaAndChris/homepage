import { styled } from 'tsstyled';
import pageChildStyle from './pageChildStyle';
import { useTheme } from '../../../styles/theme';

export default styled('div').use(() => ({ theme: useTheme() }))`
  ${pageChildStyle}
`;
