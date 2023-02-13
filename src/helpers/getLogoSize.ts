import { theme } from '@/theme/theme';

const logoSizes = {
  small: theme.sizes.width[125],
  medium: theme.sizes.width[175],
  large: theme.sizes.width[255],
};

export const getLogoSize = (size: TLogoSize): number => {
  return logoSizes[size];
};
