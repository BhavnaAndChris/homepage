import { ReactNode } from 'react';
import { styled } from 'tsstyled';
import PageHeader from './PageHeader';
import PageHero from './PageHero';
import PageContent from './PageContent';
import PageFooter from './PageFooter';
import ScrollReset from '../../atoms/ScrollReset';
import { useTheme } from '../../../styles/theme';

export default styled('div', 'Page')
  .props<{
    header?: ReactNode;
    hero?: ReactNode;
    footer?: ReactNode;
  }>({ extend: true })
  .use(() => ({ theme: useTheme() }))
  .set(({ header, hero, children, footer }) => ({
    children: (
      <>
        <ScrollReset />
        {header && <PageHeader>{header}</PageHeader>}
        {hero && <PageHero>{hero}</PageHero>}
        <PageContent>{children}</PageContent>
        <PageFooter>{footer}</PageFooter>
      </>
    ),
  }))`
    position: relative;
    min-height: var(--vh, 100vh);
    background-color: ${(props) => props.theme.color.rootBack};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    overflow: hidden;
    max-width: 100%;
  `;
