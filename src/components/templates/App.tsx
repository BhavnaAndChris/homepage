import { ReactElement, ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';
import GlobalStyle from '../../styles/GlobalStyle';
import queryClient from '../../services/queryClient';
import SuspendedFadeIn from '../organisms/SuspendedFadeIn';

export interface IAppProps {
  children?: ReactNode;
}

export default function App({ children }: IAppProps): ReactElement {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <SuspendedFadeIn>{children}</SuspendedFadeIn>
      </QueryClientProvider>
    </>
  );
}
