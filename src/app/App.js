import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header'
import About from '../pages/AboutPage'
import Current from '../pages/HomePage/Current';
import background from './assets/background.png';
import OtherCities from '../pages/HomePage/OtherCities';
import Forecast from '../pages/HomePage/Forecast';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`

const Panel = styled.div`
  background-color: white;
  width: 800px;
  border-radius: 32px;
  box-shadow: 0 0 16px rgb(0 0 0 / 50%);
  overflow: hidden;
`

const Bottom = styled.div`
  display: flex;
  padding: 40px 80px;
`

const Divider = styled.div`
    margin: 0 32px;
    border-left: 3px solid rgba(0 0 0 0.1);
    opacity: 0.6;
`

const SYDNEY_CITY_ID = 6619279;

function App() {
  const [cityId, setCityId] = useState(SYDNEY_CITY_ID);

  return (
    <>
    <Header />
    <Container>
      <Panel>
        <Current cityId={cityId} />
        <Bottom>
          <OtherCities cityId={cityId} onCityClick={(id) => setCityId(id)} />
          <Divider />
          <Forecast />
        </Bottom>
      </Panel>
    </Container>
    <About />
    </>

  );
}

export default App;
