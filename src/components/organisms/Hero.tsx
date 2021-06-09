import { ReactElement } from 'react';
import { Styled, css } from 'react-css-in-js';
import Parallax from '../atoms/Parallax';
import Image from '../atoms/Image';
import fill from '../../styles/fill';
import shadeImage from '../../styles/shadeImage';
import vignetteImage from '../../styles/vignetteImage';
import useBackgrounds from '../../hooks/useBackgrounds';

export default function Hero(): ReactElement {
  const backgrounds = useBackgrounds();
  const background =
    backgrounds.length > 0 ? backgrounds[Math.floor(Date.now() / (3 * 60 * 60 * 1000)) % backgrounds.length] : null;

  return (
    <Styled>
      {css`
        position: relative;
        height: 100vh;

        > * {
          ${fill()}
        }

        .hero__background:after {
          ${fill()}
          background-image: ${shadeImage(0.1)}, ${vignetteImage()};
          content: ' ';
        }

        .hero__image {
          ${fill()}
        }

        .hero__text {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        }

        .hero__title {
          font-family: SoInternational, cursive;
          font-size: 3rem;
          font-weight: unset;
          margin: 0;
        }

        .hero__subtitle {
          opacity: 0.6;
          font-size: 1.4rem;
          font-weight: unset;
          margin: 0;
        }
      `}
      <section className={'hero__root'}>
        <Parallax className={'hero__background'} scaleHeight={1.5}>
          {background && (
            <Image className={'hero__image'} src={`backgrounds/${background}`} alt={'hero background'} useSuspense />
          )}
        </Parallax>
        <div className={'hero__text'}>
          <h1 className={'hero__title'}>So International</h1>
          <h2 className={'hero__subtitle'}>The adventures of Bhavna &amp; Chris.</h2>
        </div>
      </section>
    </Styled>
  );
}
