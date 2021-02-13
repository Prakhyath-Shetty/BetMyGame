import "./assets/bootstrap/css/bootstrap.min.css";
// import "./assets/css/plugins.css";
// import "./App.css";

import "bootstrap";
import React, { useState } from "react";
import { Switch, Route } from "react-router";
import Routes from "./configureRoute";
import ProtectedRoute from "./components/Common/ProtectedRoute";
import { IRouteConfig } from "./shared/models/Common.model";
import routeConfiguration from "./configureRoute";

const App = () => {
  const [authenticated, setAutState] = useState(true);
  const routes = routeConfiguration();

  // useEffect(() => {
  //   const localStorage = new LocalStorage();
  //   const currentUser: IAuthModel = JSON.parse(localStorage.get("currentUser"));
  //   if (currentUser) setAutState(true);
  // }, []);

  const renderRoute = (route: IRouteConfig, index: number | string) => {
    // if (route.children && route.children.length) {
    //   route.children.map((subRoute, i) => renderRoute(subRoute, `${index}.${i}`));
    // }
    console.log("renderRoute", route.path, "--->", route);

    if (route.auth) {
      return <ProtectedRoute key={index} authenticated={authenticated} route={route} />;
    } else {
      return <Route key={index} exact path={route.path} component={route.component} />;
    }
  };

  const renderRoutes = () => {
    return <Switch>{routes.map((route, index) => renderRoute(route, index))}</Switch>;
  };

  return renderRoutes();
};

export default App;

// const authenticationPages = () => {
//   return (
//     <Switch>
//       <Route exact path="/" component={LandingPage} />
//       <Route exact path="/Register" component={RegisterPage} />
//       <Route exact path="/Login" component={LoginPage} />
//       <Route exact path="/PasswordRecovery" component={PasswordRecovery} />
//     </Switch>
//   );
// };

// const applicationPages = () => {
//   return (
//     <Layout>
//       <Switch>
//         <Route exact path="/Home" component={HomePage} />
//         <Route exact path="/Profile" component={ProfilePage} />
//         <Route exact path="/AccountSettings" component={SettingPage} />
//       </Switch>
//     </Layout>
//   );
// };
