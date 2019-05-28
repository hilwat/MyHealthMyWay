import React from 'react';
import styled from 'styled-components';

const Topbar = styled.div`
  height: 37px;
  background-color: #e17952;
  color: white;
  p {
    text-align: center;
    margin: 0;
    padding-top: 0.5em;
  }
`;

export default function EmergencyBar() {
  return (
    <Topbar>
      <p>
        <strong>Emergency?</strong> Call 911
      </p>
    </Topbar>
  );
}
