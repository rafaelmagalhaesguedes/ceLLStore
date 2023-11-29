import styled from 'styled-components';

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  background-color: #fff;

  .button {
    background-color: transparent;
    border: none;
    border-radius: 5px;
    color: #000;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 20px;
    align-self: flex-start;
    margin-bottom: 1.5rem;
    
    &:hover {
      background-color: #bbb;
    }
  }
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    font-size: 2rem;
    margin-bottom: 16px;
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    width: 100%;

    li {
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #ccc;
      display: flex;
      flex-direction: row;
      padding: 30px 0;
      gap: 2rem;
      width: 100%;  

      img {
        border-radius: 5px;
        width: 100%;
      }

      h3 {
        width: 100%;
        font-size: 1rem;
        text-align: left;
        color: #444;
      }

      div {
        display: flex;
        flex-direction: row;
        width: 50%;
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        button {
          margin-top: 3px;
        }
      }

      .minus, .plus {
        cursor: pointer;
      }

      p {
        width: 50%;
        font-size: 1rem;
        text-align: center;
        color: #f80;
        font-weight: bold;
      }

      button {
        background-color: transparent;
        border: none;
        border-radius: 5px;
        color: #000;
        cursor: pointer;
        font-size: 1rem;
        margin-bottom: 20px;
        align-self: flex-start;
        margin-bottom: 1.5rem;
        width: 10%;
        
        &:hover {
          background-color: #bbb;
        }
      }
    }
  }
`;