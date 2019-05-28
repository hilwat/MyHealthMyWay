import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';

import logo from '../images/MyHealthMyWay Logo - White.svg';

const Container = styled.div`
  height: 59px;
  background-color: #2082dc;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5em;
`;

export default function NavBar() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <Menu />
    </Container>
  );
}
