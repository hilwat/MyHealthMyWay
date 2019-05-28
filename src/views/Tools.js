import React from 'react';
import styled from 'styled-components';
import understanding from '../images/understanding.svg';
import meditation from '../images/meditation.svg';
import inspire from '../images/inspire.svg';
import distraction from '../images/distraction.svg';
import coping from '../images/coping.svg';
import plus from '../images/Plus button MyHealthMyWay.png';
import { Link } from 'react-router-dom';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.75em;
`;

const Option = styled.div`
  margin: 1%;
  width: 48%;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
  }
  cursor: pointer;
  align-content: center;
  h1 {
    font-size: 1.25em;
    text-align: center;
    margin: 0.75em 0 0;
  }
  img {
    width: 144px;
    height: 122px;
  }
`;

export default function SelfDirectedTools() {
  return (
    <div className="page">
      <h1>Self Directed Tool List</h1>

      <List>
        <Option className="rounded-container">
          <Link to="/meditation">
            <img src={meditation} alt="meditation" />
            <h1>Meditation</h1>
          </Link>
        </Option>

        <Option className="rounded-container">
          <img src={inspire} alt="inspire" />
          <h1>Inspire</h1>
        </Option>

        <Option className="rounded-container">
          <img src={coping} alt="coping" />
          <h1>Coping</h1>
        </Option>

        <Option className="rounded-container">
          <img src={understanding} alt="understanding" />
          <h1>Understanding</h1>
        </Option>

        <Option className="rounded-container">
          <img src={distraction} alt="distraction" />
          <h1>Distraction</h1>
        </Option>

        <Option className="rounded-container">
          <img
            src={plus}
            alt="plus"
            style={{ width: '50px', height: '50px', margin: '40px auto 30px' }}
          />
          <h1>& More</h1>
        </Option>
      </List>
    </div>
  );
}
