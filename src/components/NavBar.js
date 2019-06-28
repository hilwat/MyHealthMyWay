import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import logo from '../images/MyHealthMyWay Logo - White.svg';

const Container = styled.div`
  height: 59px;
  background-color: #2082dc;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5em;
`;

const Logo = styled.img`
  margin-top: 11px;
`;

export default function NavBar() {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="Logo" />
      </Link>
      <Menu />
    </Container>
  );
}
