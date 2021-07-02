import { useImage } from 'react-image';
import { styled } from 'tsstyled';

export default styled('div', 'Image')
  .props<{ src: string; alt?: string; $useSuspense?: boolean }>()
  .use(({ src, alt }) => ({ key: src, role: 'img', 'aria-label': alt }))
  .set(({ src, $useSuspense = false }) => ({ image: useImage({ srcList: src, useSuspense: $useSuspense }) }))`
    display: ${(props) => (props.image.isLoading ? 'none' : null)};
    background-image: ${(props) => (props.image.isLoading ? null : `url(${props.src})`)};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `;
