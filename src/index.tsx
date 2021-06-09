import 'core-js';
import 'regenerator-runtime/runtime';

import { render } from 'react-dom';
import { css, Style } from 'react-css-in-js';
import { QueryClient, QueryClientProvider } from 'react-query';
import { rem } from './constants';
import FadeIn from './components/atoms/FadeIn';
import Hero from './components/organisms/Hero';
import Home from './components/templates/Home';
import soInternationalFontUrl from './fonts/SoInternational.woff2';

history.scrollRestoration = 'manual';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

render(
  <>
    <Style>
      {css`
        @font-face {
          font-family: 'SoInternational';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('${soInternationalFontUrl}') format('woff2');
        }

        html,
        body {
          margin: 0;
          padding: 0;
          font-family: 'Roboto', sans-serif;
          font-size: ${rem}px;
          background-color: white;
        }
      `}
    </Style>
    <QueryClientProvider client={queryClient}>
      <FadeIn>
        <Home hero={<Hero />} />
      </FadeIn>
    </QueryClientProvider>
  </>,
  document.getElementById('root'),
);
