import React from 'react';
import styled from 'styled-components';

const Instructions = styled.div`
  background: white;
  border-radius: ${p => p.theme.borderRadius};
  border: ${p => p.theme.border};
`;

export default function Relax() {
  return (
    <div className="page">
      <h1>Relax - Box Breathing</h1>
      <div>---VIDEO--</div>

      <h2>Instructions</h2>

      <Instructions className="rounded-container">
        <p>
          Box breathing is a simple technique that a person can do anywhere,
          including at a work desk or in a cafe. Before starting, people should sit
          with their back supported in a comfortable chair and their feet on the
          floor.
        </p>
        <p>
          Close your eyes. Breathe in through your nose while counting to four
          slowly. Feel the air enter your lungs. Hold your breath inside while
          counting slowly to four. Try not to clamp your mouth or nose shut. Simply
          avoid inhaling or exhaling for 4 seconds. Begin to slowly exhale for 4
          seconds. Repeat steps 1 to 3 at least three times. Ideally, repeat the
          three steps for 4 minutes, or until calm returns.
        </p>
      </Instructions>
    </div>
  );
}
