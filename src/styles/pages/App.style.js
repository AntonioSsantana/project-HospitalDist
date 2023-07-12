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

  & > main {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, minmax(20vh, 1fr));
    grid-template-rows: auto;
    gap: 5vh;
    margin-top: 15vh;
    margin-left: 10vh;
    margin-right: 10vh;

    & > article {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
      transition: box-shadow 0.2s ease-in;

      &:hover {
        box-shadow: 1px 2px 1px 1px rgb(135, 182, 240);
      }

      & > p {
        margin-bottom: 5vh;
        padding: 2vh;
      }

      & > img {
        width: 15vh;
        height: 15vh;
        margin-bottom: 5vh;
        object-fit: cover;
      }

      & > span {
        margin-bottom: 5vh;
      }

      & > button {
        margin-bottom: 2.5vh;
        border: none;
        border-radius: 2px;
        padding: 10px 20px;
        background-color: rgb(75, 79, 84);
        color: white;
        font-size: 16px;
        cursor: pointer;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.2s ease-in-out;
        
        &:hover {
          background-color: rgba(75, 79, 84, 0.9);
          box-shadow: 0px 2px 5px rgba(0, 0, 0);
        }
      }
    }
  }
`;