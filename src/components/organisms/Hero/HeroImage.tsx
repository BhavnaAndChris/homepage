import { InferProps, styled } from 'tsstyled';
import Image from '../../atoms/Image';
import absoluteFill from '../../../styles/helperAbsoluteFill';

export default styled(Image)
  .props<Omit<InferProps<typeof Image>, '$useSuspense'>>()
  .set(() => ({ $useSuspense: true }))
  .use(() => ({ alt: 'hero image' }))`
    ${absoluteFill}
  `;
