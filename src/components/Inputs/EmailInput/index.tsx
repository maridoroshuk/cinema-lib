import React, { useId } from 'react';
import { ErrorMessage } from 'formik';

import Send from '@/assets/icons/send.png';
import { Tooltip } from '@/components/Tooltip';

import { Icon, Label, StyledField, SubmitButton, Wrapper } from './styles';
import { IEmailInput } from './interface';

export const EmailInput = ({placeholder}: IEmailInput) => {
  const emailId = useId();

  return (
    <Wrapper>
      <Label htmlFor="email">
        <StyledField
          id={emailId}
          type="email"
          name="email"
          placeholder={placeholder}
          autoComplete="off"
        />
        <ErrorMessage name="email">
          {(message) => <Tooltip>{message}</Tooltip>}
        </ErrorMessage>
      </Label>
      <SubmitButton type="submit">
        <Icon src={Send} alt="send email" />
      </SubmitButton>
    </Wrapper>
  );
};
