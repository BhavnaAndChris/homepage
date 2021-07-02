import { InferProps, styled } from 'tsstyled';
import HeroParallax from './HeroParallax';
import HeroImage from './HeroImage';
import HeroText from './HeroText';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import { useTheme } from '../../../theme';
import useBackgrounds from '../../../hooks/useBackgrounds';
import { breakLaptop, breakTablet } from '../../../hooks/useResponsiveBreakpoint';
import absoluteFill from '../../../styles/helperAbsoluteFill';
import vignetteImage from '../../../styles/helperVignetteImage';

export default styled('section', 'Hero')
  .props((props: Omit<InferProps<'div'>, 'children'>) => ({ ...props, children: undefined }))
  .use(() => ({ theme: useTheme(), backgrounds: useBackgrounds() }))
  .set(({ backgrounds }) => ({
    $background:
      backgrounds.length > 0 ? backgrounds[Math.floor(Date.now() / (3 * 60 * 60 * 1000)) % backgrounds.length] : null,
  }))
  .set(({ $background }) => ({
    children: (
      <>
        <HeroParallax>{$background && <HeroImage src={$background} />}</HeroParallax>
        <HeroText>
          <HeroTitle>So International</HeroTitle>
          <HeroSubtitle>The Adventures of Bhavna &amp; Chris.</HeroSubtitle>
        </HeroText>
      </>
    ),
  }))`
    position: relative;
    z-index: 0;
    display: flex;
    justify-content: center;
    height: calc(${(props) => props.theme.size.heroHeight} * 0.5);
    
    &:after {
      ${absoluteFill}
      background-image: ${vignetteImage};
      content: ' ';
    }

    /* ${breakTablet} {
      height: calc(${(props) => props.theme.size.heroHeight} * 0.5);
    } */

    ${breakLaptop} {
      height: ${(props) => props.theme.size.heroHeight};
    }
  `;
