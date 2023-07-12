import { styled } from 'styled-components';

export const Div = styled.div`

  & > div:nth-child(3) {
    display: flex;
    justify-content: center;
    margin: 2vh; 
    
    & > input {
      padding: 8px;
      border: none;
      border-bottom: 1px solid #ccc;
      font-size: 16px;
      transition: box-shadow 0.1s ease-in;
    
      &:focus {
        outline: none;
        box-shadow: 0 1px 0 0 blue;
      }
    }
  }
`;