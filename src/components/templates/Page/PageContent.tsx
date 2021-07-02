import { styled } from 'tsstyled';
import pageChildStyle from './pageChildStyle';
import { useTheme } from '../../../theme';

export default styled('div').use(() => ({ theme: useTheme() }))`
  ${pageChildStyle}
  flex: 1 1 auto;
  background-color: ${(props) => props.theme.color.pageContentBack};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
