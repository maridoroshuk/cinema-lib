import React from 'react';

import { facebookStyles, githubStyles, googleStyles } from './config';
import { ISocialAuthButtonProps } from './interface';
import { LogoButton } from './LogoButton';

export const SocialAuthButton = ({
  variant,
  handleButtonClick,
  children,
}: ISocialAuthButtonProps) => {
  return (
    <>
      {variant === 'google' ? (
        <LogoButton
          config={googleStyles}
          value={variant}
          onClick={handleButtonClick}
        >
          {children}
        </LogoButton>
      ) : null}
      {variant === 'facebook' ? (
        <LogoButton
          config={facebookStyles}
          value={variant}
          onClick={handleButtonClick}
        >
          {children}
        </LogoButton>
      ) : null}
      {variant === 'github' ? (
        <LogoButton
          config={githubStyles}
          value={variant}
          onClick={handleButtonClick}
        >
          {children}
        </LogoButton>
      ) : null}
    </>
  );
};
