import Facebook from '@/assets/icons/facebook.png';
import Github from '@/assets/icons/github.png';
import Google from '@/assets/icons/google.png';
import { theme } from '@/theme/theme';

export const googleStyles: TConfigLogoButton = {
  logo: Google,
  textColor: theme.colors.greyTransparent,
  background: theme.colors.defaultWhite,
};

export const facebookStyles: TConfigLogoButton = {
  logo: Facebook,
  textColor: theme.colors.defaultWhite,
  background: theme.colors.cyanBlue,
};

export const githubStyles: TConfigLogoButton = {
  logo: Github,
  textColor: theme.colors.defaultWhite,
  background: theme.colors.defaultBlack,
};
