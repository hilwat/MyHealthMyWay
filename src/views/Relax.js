import React from 'react';
import NavBar from '../components/NavBar';

export default function Relax() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <h1>Relax - Box Breathing</h1>
        <div>
          <iframe
            width="350"
            height="190"
            src="https://www.youtube.com/embed/1g5Ol25y9Xs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <h2>Instructions</h2>
        <div className="rounded-container">
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
        </div>
      </div>
    </div>
  );
}
