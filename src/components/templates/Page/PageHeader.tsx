import { ReactElement, ReactNode } from 'react';
import PageHeaderContent from './PageHeaderContent';
import PageHeaderPlaceholder from './PageHeaderPlaceholder';
import usePageHeaderState from './usePageHeaderState';

export interface IPageHeaderProps {
  children?: ReactNode;
}

export default function PageHeader({ children }: IPageHeaderProps): ReactElement | null {
  const { isVisible, setPlaceholder } = usePageHeaderState();

  return (
    <>
      <PageHeaderContent $isVisible={isVisible}>{children}</PageHeaderContent>
      <PageHeaderPlaceholder ref={setPlaceholder} />
    </>
  );
}
