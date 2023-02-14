import React from 'react';

import { ITooltipProps } from './interface';
import { Text } from './styles';

export const Tooltip = ({ children }: ITooltipProps) => {
  return <Text>{children}</Text>;
};
