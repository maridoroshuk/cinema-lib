import React from 'react';
import ReactLoading from 'react-loading';
import { ILoaderProps } from './interface';
import { LoaderWrapper } from './styles';

export function Loader({ height, width, color }: ILoaderProps) {
  return (
    <LoaderWrapper>
      <ReactLoading type="spokes" color={color} height={height} width={width} />
    </LoaderWrapper>
  );
}
