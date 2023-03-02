import styled from 'styled-components';

export const Button = styled.button<{
  logo: string;
  textColor: string;
  background: string;
}>`
  width: 100%;
  padding: ${({ theme }) => `${theme.spaces[5]}px ${theme.spaces[10]}px`};
  color: ${({ textColor }) => textColor};
  background-color: ${({ background }) => background};
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-weight: ${({ theme }) => theme.sizes.fontWeight[600]};
  font-size: ${({ theme }) => theme.sizes.fontSize[14]}px;
  border: none;
  border-radius: ${({ theme }) => theme.spaces[10]}px;
  cursor: pointer;
  text-align: center;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.screenSizes[860]}px) {
    max-width: ${({ theme }) => theme.sizes.width[340]}px;
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.screenSizes[600]}px) {
    padding: ${({ theme }) => `${theme.spaces[15]}px ${theme.spaces[30]}px`};

    &:before {
      width: ${({ theme }) => theme.sizes.width[20]}px;
      height: ${({ theme }) => theme.sizes.width[20]}px;
      content: '';
      display: inline-block;
      object-fit: contain;
      vertical-align: bottom;
      background-image: ${({ logo }) => `url(${logo})`};
      background-size: cover;
      margin-right: ${({ theme }) => theme.spaces[20]}px;
    }
  }
`;
