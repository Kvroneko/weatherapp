import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import About from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage'
import Current from '../pages/HomePage/Current';
import background from './assets/background.jpg';
import OtherCities from '../pages/HomePage/OtherCities';
import Forecast from '../pages/HomePage/Forecast';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Containerr = styled.div`
  display: flex;
  flex-direction: column;
  min-heigt: 100vh;
`

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
    <Router>
    <Containerr>
    <Header />
    <Switch>
      <Route path="/" exact>
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
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="/signup" exact>
        <SignupPage />
      </Route>
    </Switch>
    </Containerr>
    </Router>

  );
}

export default App;