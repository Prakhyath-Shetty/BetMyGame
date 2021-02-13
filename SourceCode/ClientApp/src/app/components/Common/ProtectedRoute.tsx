import React, { Fragment } from "react";
import { Route } from "react-router";
import { IRouteConfig } from "../../shared/models/Common.model";
import Layout from "../Layout/Layout";

export default function ProtectedRoute(props: { route: IRouteConfig; authenticated: boolean }) {
  const { exact, layout, path, component }: IRouteConfig = props.route;
  if (props.authenticated) {
    if (layout) {
      return (
        <Layout>
          <Route exact path={path} component={component} />
        </Layout>
      );
    }
    return <Route exact path={path} component={component} />;
  } else {
    // TODO : Add Not found page on not auth
    return <Route exact={exact} path="/NotFound" component={Fragment} />;
  }
}
