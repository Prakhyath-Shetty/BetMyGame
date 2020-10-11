// import "bootstrap/dist/css/bootstrap.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/plugins.css";
// import "./App.css";

import "bootstrap";
import React from "react";
import { Switch, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import RegisterPage from "./modules/Authentication/RegisterPage";
import LoginPage from "./modules/Authentication/LoginPage";
import { LandingPage } from "./modules/LandingPage/LandingPage";
import { PasswordRecovery } from "./modules/Authentication/PasswordRecovery";
import { ProfilePage } from "./modules/Account/ProfilePage";
import { SettingPage } from "./modules/Account/SettingPage";

function App() {
  const authenticationPages = () => {
    return (
      <Switch>
        <Route exact path="/Register" component={RegisterPage} />
        <Route exact path="/Login" component={LoginPage} />
        <Route exact path="/PasswordRecovery" component={PasswordRecovery} />
      </Switch>
    );
  };

  const applicationPages = () => {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Profile" component={ProfilePage} />
          <Route exact path="/AccountSettings" component={SettingPage} />
        </Switch>
      </Layout>
    );
  };

  return applicationPages();
}

export default App;
