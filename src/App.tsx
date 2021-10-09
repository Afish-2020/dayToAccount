import Nav from "components/Nav";
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
flex-grow: 1;
`

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Redirect exact from="/" to="/money" />
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Main>
        <Nav />
      </Wrapper>
    </Router>
  );
}

function Tags() {
  return <h2>Tags</h2>;
}

function Money() {
  return <h2>Money</h2>;
}

function Statistics() {
  return <h2>Statistics</h2>;
}

function NoMatch(){
  return <div>页面不存在</div>
}