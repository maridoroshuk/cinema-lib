import { theme } from '@/theme/theme';

const logoSizes = {
  small: theme.sizes.width[125],
  medium: theme.sizes.width[255],
  large: theme.sizes.width[500],
};

export const getLogoSize = (size: TLogoSize): number => {
  return logoSizes[size];
};
