import React from 'react';

import { facebookStyles, githubStyles, googleStyles } from './config';
import { ISocialAuthButtonProps } from './interface';
import { LogoButton } from './LogoButton';

export const SocialAuthButton = ({
  variant,
  handleButtonClick,
}: ISocialAuthButtonProps) => {
  return (
    <>
      {variant === 'google' ? (
        <LogoButton
          config={googleStyles}
          value={variant}
          onClick={handleButtonClick}
        >
          Continue with Google
        </LogoButton>
      ) : null}
      {variant === 'facebook' ? (
        <LogoButton
          config={facebookStyles}
          value={variant}
          onClick={handleButtonClick}
        >
          Sign up with Facebook
        </LogoButton>
      ) : null}
      {variant === 'github' ? (
        <LogoButton
          config={githubStyles}
          value={variant}
          onClick={handleButtonClick}
        >
          Sign up with GitHub
        </LogoButton>
      ) : null}
    </>
  );
};
