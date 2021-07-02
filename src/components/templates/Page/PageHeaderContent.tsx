import { styled } from 'tsstyled';
import pageChildStyle from './pageChildStyle';
import { useTheme } from '../../../styles/theme';

export default styled('div')
  .props<{ $isVisible: boolean }>({ extend: true })
  .use(() => ({ theme: useTheme() }))`
    ${pageChildStyle}
    position: fixed;
    flex: 0 0 auto;
    background-color: ${(props) => props.theme.color.pageHeaderBack};
    height: ${(props) => props.theme.size.headerHeight};
    width: 100%;
    top: ${(props) => (props.$isVisible ? 0 : `-${props.theme.size.headerHeight}`)};
    z-index: 1;
    transition: top 0.25s ease;
    display: flex;
    justify-content: center;
  `;
