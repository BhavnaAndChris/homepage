import { styled } from 'tsstyled';
import { useTheme } from '../../styles/theme';

export default styled('div', 'Copyright')
  .props<{ children: string }>()
  .use(() => ({ theme: useTheme() }))
  .set((props) => ({ children: `Copyright © ${new Date().getFullYear()} ${props.children} All Rights Reserved.` }))`
    font-size: ${(props) => props.theme.size.copyrightFont};
    text-align: center;
    padding: ${(props) => props.theme.size.copyrightPadding};
  `;
