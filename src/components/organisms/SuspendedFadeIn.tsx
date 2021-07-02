import { ReactElement } from 'react';
import { InferProps } from 'tsstyled';
import FadeIn from '../atoms/FadeIn';
import SuspenseEx from '../atoms/SuspenseEx';

export default function SuspendedFadeIn(props: InferProps<typeof FadeIn>): ReactElement {
  return (
    <SuspenseEx fallback={null}>
      <FadeIn {...props} />
    </SuspenseEx>
  );
}
