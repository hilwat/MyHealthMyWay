import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  width: 124px;
  line-height: 1;
  height: 43px;
  cursor: pointer;
  border-radius: 28px;
  border: solid 1px ${p => p.theme.primary};
  color: ${p => p.theme.primary};
  border: 1px solid ${p => p.theme.primary};
  background: white;
  &:hover {
    background: ${p => p.theme.primary};
    color: white;
    font-weight: bold;
  }
`;

export default function RoundButton({ text }) {
  return <Container>{text}</Container>;
}
