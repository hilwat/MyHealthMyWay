import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import NavBar from './components/NavBar';

const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    height: 100%;
    line-height: 1.2;    
    background: #222; 
    margin: 0;
  }
  #root {
    height: 100%
  }
`;

const Background = styled.div`
  height: 100%;
  width: auto;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Mockup = styled.div`
  width: 375px;
  height: 667px;
  background: white;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Mockup>
          <NavBar />
        </Mockup>
      </Background>
    </>
  );
}

export default App;
