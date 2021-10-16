import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
import Money from "views/Money";
import NoMatch from "views/NoMatch";
import Statistics from "views/Statistics";
import { Tag } from "views/Tag";
import Tags from "views/Tags";

const AppWrapper = styled.div`
color: #333;
`

export default function App() {
  return (
    <AppWrapper>
    <Router>
          <Switch>
            <Redirect exact from="/" to="/money" />
            <Route exact path="/tags">
              <Tags />
            </Route>
            <Route exact path="/tags/:id">
              <Tag />
            </Route>
            <Route exact path="/money">
              <Money />
            </Route>
            <Route exact path="/statistics">
              <Statistics />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
    </Router>
    </AppWrapper>
  );
}






