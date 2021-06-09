import { ReactElement } from 'react';
import { Styled, css } from 'react-css-in-js';
import { useImage } from 'react-image';

export interface IImageProps {
  className?: string;
  src: string;
  alt?: string;
  useSuspense?: boolean;
  placeholder?: ReactElement;
}

export default function Image({ className, src, alt, useSuspense = false, placeholder }: IImageProps): ReactElement {
  const { isLoading } = useImage({ srcList: [src], useSuspense });

  return (
    <Styled className={className}>
      {css`
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      `}
      {isLoading ? (
        placeholder
      ) : (
        <div
          className={'image__root'}
          key={src}
          style={{ backgroundImage: `url('${src}')` }}
          {...(alt != null ? { role: 'img', 'aria-label': alt } : {})}
        />
      )}
    </Styled>
  );
}
