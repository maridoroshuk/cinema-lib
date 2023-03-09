import styled from 'styled-components';

export const Wrapper = styled.div`
  position: 'fixed';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex[1000]};
`;
