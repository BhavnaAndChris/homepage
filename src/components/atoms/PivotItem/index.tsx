import { styled } from 'tsstyled';
import PivotItemContent from './PivotItemContent';
import PivotItemLink from './PivotItemLink';

export default styled('div', 'PivotItem')
  .props<{ action: { href: string; target?: string } }>()
  .set(({ action, children }) => ({
    children: (
      <PivotItemContent>
        <PivotItemLink {...action}>{children}</PivotItemLink>
      </PivotItemContent>
    ),
  }))`
  flex: 0 0 auto;
`;
