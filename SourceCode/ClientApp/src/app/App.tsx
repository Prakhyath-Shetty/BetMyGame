import React from "react";
import { Switch, Route } from "react-router";
import Layout from "./components/Layout/Layout";
// import "./App.css";

import { LandingPage } from "./modules/LandingPage/LandingPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Game" component={() => <div />} />
      </Switch>
    </Layout>
  );
}

export default App;
