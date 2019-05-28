import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 5px;
  line-height: 1;
  background: transparent;
  padding: 0.75em;
  color: #2082dc;
  font-weight: bold;
  border: 1px solid #2082dc;
  cursor: pointer;
  &:hover {
    color: white;
    background: #2082dc;
  }
`;

export default function SquareButton({ text, className }) {
  return <Button className={className}>{text}</Button>;
}
