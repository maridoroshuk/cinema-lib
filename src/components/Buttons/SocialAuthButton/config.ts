import Facebook from '@/assets/icons/facebook.png';
import Github from '@/assets/icons/github.png';
import Google from '@/assets/icons/google.png';
import { theme } from '@/theme/theme';

export const googleStyles: TConfigLogoButton = {
  logo: Google,
  textColor: theme.colors.neutral050Transparent,
  background: theme.colors.customBackground,
};

export const facebookStyles: TConfigLogoButton = {
  logo: Facebook,
  textColor: theme.colors.customBackground,
  background: theme.colors.primary400,
};

export const githubStyles: TConfigLogoButton = {
  logo: Github,
  textColor: theme.colors.customBackground,
  background: theme.colors.customBlack,
};
