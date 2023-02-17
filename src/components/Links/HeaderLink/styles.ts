import styled from 'styled-components';

export const ListItemStyled = styled.li`
  list-style-type: none;
  a:after {
    content: '';
    width: 0;
    height: ${({ theme }) => theme.sizes.height[2]}px;
    color: ${({ theme }) => theme.colors.neutral1000};
    display: block;
    background-color: ${({ theme }) => theme.colors.gold};
    transition-duration: 300ms;
    margin-top: ${({ theme }) => theme.spaces[1]}px;
  }
  a:hover:after {
    width: 100%;
  }
  a.active:after {
    width: 100%;
  }
`;
