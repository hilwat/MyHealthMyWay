import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import call from '../images/undraw_calling_kpbp.svg';
import chat from '../images/undraw_online_world_mc1t.svg';
import video from '../images/undraw_video_call_kxyp.svg';
import SquareButton from '../components/SquareButton';

const Option = styled.section`
  margin: 1em 0;
  display: flex;
  .rounded-container {
    min-width: 215px;
    h1 {
      text-align: center;
      margin: 0;
    }
  }
  div:last-of-type {
    padding-left: 1em;
  }
  button {
    width: 100%;
  }
`;

function Talk({ match }) {
  return (
    <div className="page">
      <Option>
        <div className="rounded-container">
          <h1>Call</h1>
          <img src={call} />
        </div>
        <div>
          <p>Details:</p>
          <p>Provincial Mental Crisis Number</p>
          <p>1-888-234-5678</p>
          <p>Open 24/7</p>
          <SquareButton text="Start" />
        </div>
      </Option>
      <Option>
        <div className="rounded-container">
          <h1>Chat</h1>
          <img src={chat} />
        </div>
        <div>
          <p>Details:</p>
          <p>Provincial Mental Crisis Number</p>
          <p>1-888-234-5678</p>
          <p>Open 24/7</p>

          <Link to="/chat">
            <SquareButton text="Start" />
          </Link>
        </div>
      </Option>
      <Option>
        <div className="rounded-container">
          <h1>Video</h1>
          <img src={video} />
        </div>
        <div>
          <p>Details:</p>
          <p>Provincial Mental Crisis Number</p>
          <p>1-888-234-5678</p>
          <p>Open 24/7</p>
          <SquareButton text="See Options" />
        </div>
      </Option>
    </div>
  );
}

export default Talk;
