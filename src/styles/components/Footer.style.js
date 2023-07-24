import { styled } from 'styled-components';

export const Footer = styled.footer`
  margin-top: 100%;
  background-color: rgb(238,238,238);
  color: black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  box-shadow: 0 0 2px 0.5px;

  & > article > div {
    padding: 2vh;

    & > h4 {
      font-weight: 700;
    }
  }

  & > article:nth-child(2) > div > img {
    width: 4vh;
    padding: 2vh;
  }

  & > article:nth-child(3) {
    grid-column: 1 / -1;
    background-color: rgb(77,77,79);
    color: white;
    font-size: 12.5px;
    padding: 2vh;
  }
`;