import { styled } from 'tsstyled';

export default styled('div')
  .props<{ $scaleHeight?: number; $scaleWidth?: number; $x: number; $y: number }>()
  .use(() => ({ $scaleHeight: 1, $scaleWidth: 1, $x: 0, $y: 0 }))
  .set(({ $scaleHeight, $scaleWidth, $x, $y, style = {} }) => ({
    style: {
      ...style,
      top: `${($scaleHeight - 1) * $y * -100}%`,
      bottom: `${($scaleHeight - 1) * ($y - 1) * 100}%`,
      left: `${($scaleWidth - 1) * $x * -100}%`,
      right: `${($scaleWidth - 1) * ($x - 1) * 100}%`,
    },
  }))`
  position: absolute;
`;
