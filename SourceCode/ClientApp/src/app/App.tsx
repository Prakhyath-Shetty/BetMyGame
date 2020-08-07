import React from "react";
import { Switch, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import "./assets/css/styles.css";
// import "./App.css";
import { LandingPage } from "./modules/LandingPage/LandingPage";
import RegisterPage from "./modules/Authentication/RegisterPage";
import LoginPage from "./modules/Authentication/LoginPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/RegisterPage" component={RegisterPage} />
        <Route exact path="/LoginPage" component={LoginPage} />
        <Route exact path="/Game" component={() => <div />} />
      </Switch>
    </Layout>
  );
}

export default App;
