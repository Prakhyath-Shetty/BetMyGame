import React from "react";
import { Switch, Route } from "react-router";
import Layout from "./components/Layout/Layout";

import { LandingPage } from "./modules";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Layout>
  );
}

export default App;
