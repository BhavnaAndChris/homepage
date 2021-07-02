import { getId, styled } from 'tsstyled';
import { useTheme } from '../theme';
import useViewHeight from '../hooks/useViewHeight';
import rockSaltFontWoff2 from '../fonts/Rock-Salt.woff2';
import rockSaltFontWoff from '../fonts/Rock-Salt.woff';
import robotoLatinFontWoff2 from '../fonts/Roboto-Light-Latin.woff2';
import robotoLatinExtFontWoff2 from '../fonts/Roboto-Light-LatinExt.woff2';
import robotoLatinFontWoff from '../fonts/Roboto-Light-Latin.woff';
import robotoLatinExtFontWoff from '../fonts/Roboto-Light-LatinExt.woff';

export const animationFadeIn = getId('fade-in');

export default styled('style').use(() => ({ theme: useTheme(), $vh: useViewHeight() }))`
  @font-face {
    font-family: 'RockSalt';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('${rockSaltFontWoff2}') format('woff2'), url('${rockSaltFontWoff}') format('woff');
  }

  /* latin */
  @font-face {
    font-family: RobotoLight;
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('${robotoLatinFontWoff2}') format('woff2'), url('${robotoLatinFontWoff}') format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,
      U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: RobotoLight;
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('${robotoLatinExtFontWoff2}') format('woff2'), url('${robotoLatinExtFontWoff}') format('woff');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }

  @keyframes ${animationFadeIn} {
    from {
      opacity: 0;
    }
    to {
      opacity: 100%;
    }
  }

  :root {
    --vh: ${(props) => props.$vh}px;
  }

  html,
  body {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    min-height: var(--vh, 100vh);
    font-family: ${(props) => props.theme.font.root};
    font-size: ${(props) => props.theme.size.rootFont}px;
    color: ${(props) => props.theme.color.rootText};
    background-color: ${(props) => props.theme.color.rootBack};
  }
`;
