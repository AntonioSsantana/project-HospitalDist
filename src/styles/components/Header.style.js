import { styled } from 'styled-components';

export const Header = styled.header`
  display: flex;
  height: 8vh;
  background-color: rgb(235, 249, 251);
  justify-content: space-between;
  align-items: center;
  
  & > div:nth-child(1) {
    margin-left: 5vh;
  }

  & > div:nth-child(2) {
    margin-left: 60%;
    transition: box-shadow 0.2s ease-out;

    &:hover {
      box-shadow: 0px 2px 0px 0px black;
    }
  } 

  & > div:nth-child(3) {
    margin-right: 5vh;
    transition: box-shadow 0.2s ease-out;

    &:hover {
      box-shadow: 0px 2px 0px 0px black;
    }
  }
  
  & > div > a {
    display: flex;
    align-items: center;
    padding: 1vh;
    text-decoration: none;
    color: black;

    & > span {
      padding: 1vh;
    }
  }
`;
