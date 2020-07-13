import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import TopMenu from "../TopBar/TopMenu";

export default function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      <TopMenu />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}
