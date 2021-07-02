import { createTheme } from 'tsstyled';

export const [useTheme, ThemeProvider] = createTheme({
  color: {
    rootText: '#666',
    rootBack: '#f8f8f8',
    heroTitle: '#fff',
    heroSubtitle: 'rgba(255, 255, 255, 0.75)',
    pivotText: '#666',
    pivotLine: '#666',
    pageHeaderBack: '#f8f8f8',
    pageContentBack: '#f0f0f0',
    pageFooterBack: '#f8f8f8',
  },
  size: {
    rootFont: 16,
    headerHeight: '5rem',
    headerPivotFont: '1.25rem',
    heroHeight: 'calc(100vh - 8rem)',
    heroTitleFont: '3rem',
    heroSubtitleFont: '1.5rem',
    footerHeight: '10rem',
    footerPadding: '3rem',
    pivotLine: 'max(0.075em, 1px)',
    copyrightFont: '0.75rem',
    copyrightPadding: '1rem',
  },
  font: {
    root: 'RobotoLight',
    header: 'Garamond, "Times New Roman", Georgia, serif',
    title: 'RockSalt',
    pivot: 'RobotoLight',
  },
});

export type Theme = ReturnType<typeof useTheme>;
