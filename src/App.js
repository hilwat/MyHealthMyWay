import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';

import { Onboarding, Resources } from './views';

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
        <Router>
          <Mockup>
            <NavBar />
            <Route path="/" exact component={Onboarding} />
            <Route path="/resources" component={Resources} />
          </Mockup>
        </Router>
      </Background>
    </>
  );
}

export default App;
