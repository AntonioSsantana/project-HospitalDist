import { styled } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  background-color: rgb(27,96,172);
  justify-content: center;
  
  & > div > button {
    background-color: inherit;
    color: rgb(200, 230, 250);
    border: none;
    margin: 2vh;
    font-size: 16px;
    transition: box-shadow 0.2s linear;

    &:hover {
      cursor: pointer;
      box-shadow: 0 2px 0 0 rgb(122, 220, 232);
    }
  }
`;