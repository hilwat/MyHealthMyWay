import React from 'react';
import Title from '../components/Title';
import styled from 'styled-components';
import searchIcon from '../images/musica-searcher.svg';
import map from '../images/MyHealthMyWay - Map Kingston.svg';
import pin from '../images/MyHealthMyWay - Map Kingston - green flag only.png';

const Intro = styled.p`
  margin: 1em;
`;

const Search = styled.div`
  padding: 0.5em;
  margin: 2em 0 1em;
  background: white;
  border-radius: ${p => p.theme.borderRadius};
  border: ${p => p.theme.border};
  display: flex;
  align-items: center;
  img {
    margin-right: 0.5em;
  }
`;

const Map = styled.div`
  margin: 1em 0;
  background: white;
  border-radius: ${p => p.theme.borderRadius};
  border: ${p => p.theme.border};
  overflow: hidden;
  img {
    overflow: hidden;
  }
`;

const List = styled.div`
  margin: 1em 0;
  background: white;
  border-radius: ${p => p.theme.borderRadius};
  border: ${p => p.theme.border};
  padding: 1em;
  display: flex;
  align-items: start;
  img {
    overflow: hidden;
    width: 13px;
  }
  p {
    margin: 0 1em;
  }
`;

function Resources() {
  return (
    <div className="page">
      <Title text="Resources" />
      <Intro>
        Telehealth for medical advice- Toll-free:
        <strong className="primary">1-866-797-0000</strong>
      </Intro>

      <Intro>
        Ask if your workplace has an Employment Assistance Programs (EAP)
      </Intro>
      <Search>
        <img src={searchIcon} alt="search icon" />
        K7L3P5
      </Search>
      <Map>
        <img src={map} alt="map" />
      </Map>

      <h2>Group Support</h2>
      <List>
        <img src={pin} alt="pin" />
        <div>
          <p>Depression & Aniexty Support</p>
          <p> Every Wednesday 6:30pm</p>
          <p> Bethel Church - 314 Johnson St</p>{' '}
        </div>
      </List>

      <List>
        <img src={pin} alt="pin" />
        <div>
          <p>Boundary Mangement</p>
          <p> John Deutsch University Centre</p>
        </div>
      </List>
    </div>
  );
}

export default Resources;
