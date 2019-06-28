import React from 'react';
import EmergencyBar from '../components/EmergencyBar';
import RoundButton from '../components/RoundButton';
import SquareButton from '../components/SquareButton';
import logo from '../images/MyHealthMyWay Logo - Blue.svg';
import chat from '../images/undraw_group_chat_v059.svg';
import avatar from '../images/MyHealthMyWay Blue - Avatar.svg';
import styled from 'styled-components';

const Img = styled.img`
  margin: 0.5em auto 1.5em;
  display: block;
`;

const Text = styled.p`
  margin: 1.5em auto;
  color: ${p => p.theme.primary};
  font-weight: bold;
  text-align: center;
  font-size: 1.1em;
`;

const Select = styled.div`
  div {
    display: flex;
    justify-content: space-between;
  }
  p {
    width: 260px;
    padding: 0.5em;
    border-radius: 5px;
    background-color: #f8f8f8;
  }
  button {
    width: 48%;
    font-size: 1em;
  }
  div:last-of-type {
    margin-left: 63px;
  }
`;

const Start = styled(SquareButton)`
  width: 70%;
  margin: 1.5em auto 0;
  font-size: 1.2em;
  display: block;
`;

const Agreement = styled.div`
  font-size: 90%;
  display: flex;
  align-items: flex-start;
  margin: 1em;
  p {
    margin: 0;
    text-align: center;
  }
  input {
    transform: scale(1.5);
    margin-right: 0.5em;
    border-radius: 5px;
    border: solid 1px #cad1d8;
  }
`;

function Onboarding() {
  return (
    <div>
      <EmergencyBar />

      <div className="content">
        <Img src={logo} alt="logo" />
        <Img src={chat} alt="chat" />
        <Text>FREE & Anoymous - GRATUIT & Anonyme</Text>
        <Select className="rounded-container">
          <div>
            <img src={avatar} alt="avatar" />
            <p>
              I am a bot here to help guide you! - Je suis un bot ici pour vous
              guider! Your preference? Votre préférence?
            </p>
          </div>

          <div>
            <RoundButton text="English" />
            <RoundButton text="Français" />
          </div>
        </Select>
        <Agreement>
          <input type="checkbox" name="agreement" />
          <p>
            I agree to MyHealth MyWay’s
            <span className="primary">Terms of Service</span>. J&apos;accepte
            <span className="primary">les conditions d&apos;utilisation</span> de
            MyHealth MyWay
          </p>
        </Agreement>
        <Start text="Get Started" />
      </div>
    </div>
  );
}

export default Onboarding;
