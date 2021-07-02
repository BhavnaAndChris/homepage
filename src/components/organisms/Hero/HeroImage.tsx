import { InferProps, styled } from 'tsstyled';
import Image from '../../atoms/Image';
import absoluteFill from '../../../styles/helperAbsoluteFill';

export default styled(Image)
  .props((props: Omit<InferProps<typeof Image>, '$useSuspense'>) => ({ ...props, $useSuspense: true }))
  .use(() => ({ alt: 'hero image' }))`
    ${absoluteFill}
  `;
