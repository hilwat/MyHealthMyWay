import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 42px;
  border-radius: 5px;
  background: transparent;
  padding: 1em;
  color: #2082dc;
  font-weight: bold;
  border: 1px solid #2082dc;
  cursor: pointer;
  &:hover {
    color: white;
    background: #2082dc;
  }
`;

export default function SquareButton({ text }) {
  return <Button>{text}</Button>;
}
