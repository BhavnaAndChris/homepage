import { styled } from 'tsstyled';
import PivotItem from '../atoms/PivotItem';
import { useTheme } from '../../theme';
import { breakLaptop } from '../../hooks/useResponsiveBreakpoint';

export default styled('div', 'Pivot')
  .use(() => ({ theme: useTheme() }))
  .set(({ children }) => ({
    children: children ?? (
      <>
        <PivotItem key={'home'} action={{ href: '#/' }}>
          Home
        </PivotItem>
        <PivotItem key={'blog'} action={{ href: '#/blog' }}>
          Blog
        </PivotItem>
        <PivotItem key={'about'} action={{ href: '#/about' }}>
          About
        </PivotItem>
      </>
    ),
  }))`
  flex: 0 0 auto;
  font-family: ${(props) => props.theme.font.pivot};
  font-size: calc(${(props) => props.theme.size.headerPivotFont} * 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakLaptop} {
    font-size: ${(props) => props.theme.size.headerPivotFont};
  }
`;
