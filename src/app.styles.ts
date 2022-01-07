import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/park_img.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    
  }
  * {
    box-sizing: border-box;
    font-family: "Catamaran", sans-serif;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    background-image: linear-gradient(180deg, #fff, #00E8FF);
    color: black;
    font-size: 2rem;
    margin: 10px 0;
    padding: 3px 8px 3px 8px;
    border: 3px solid black;
    border-radius: 15px;

  }

  .titleWrapper {
    background-color: rgba(0, 0, 0, 0.3);
    border: 3px solid black;
    border-radius: 15px;

  }

  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #FF3A00 );
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #FF3A00 );
    font-size: 60px;
    text-align: center;
    margin: 20px;
    font-weight: 400;
  }

  .start, .next {
    font-size: 2rem;
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d39558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40;
    margin: 20px 0;
    padding 0 40px;
  }

  .start {
    max-width: 200px;
  }



`
