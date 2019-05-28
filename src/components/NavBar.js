import React from 'react';
import styled from 'styled-components';
import logo from '../images/MyHealthMyWay Logo - White.svg';
import menu from '../images/MyHealthMyWay Menu - White.svg';

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
      <img src={menu} alt="Menu Icon" />
    </Container>
  );
}
