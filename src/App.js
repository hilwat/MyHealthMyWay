import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Onboarding, Resources, Talk, Tools, Chat, Relax } from './views';

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
    color: #445870;
    margin: 0;
  }
  #root {
    height: 100%
  }
  .primary {
    color: #2082dc
  }
  .content {
    padding: 1em;
  }
  h1, h2 {
    color: #2082dc
  }
  .rounded-container {
    background: white;
    border-radius: 5px;
    border: solid 1px #cad1d8;
    padding: .75rem;
  }
`;

const theme = {
  primary: '#2082dc',
};

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
  width: 395px;
  height: 667px;
  background: #f6f7f9;
  overflow-y: scroll;
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Background>
          <Router>
            <Mockup>
              <Route path="/" exact component={Onboarding} />
              <Route path="/resources" component={Resources} />
              <Route path="/meditation" component={Relax} />
              <Route path="/talk" component={Talk} />
              <Route path="/chat" component={Chat} />
              <Route path="/tools" component={Tools} />
            </Mockup>
          </Router>
        </Background>
      </ThemeProvider>
    </>
  );
}

export default App;
