import React from "react";
import { connect } from "react-redux";
import AppBar from "../AppBar/AppBar";
import { DrawerNav } from "../DrawerNav/DrawerNav";
import { NavBar } from "../NavBar/NavBar";

const Layout = (props: any) => {
  return (
    <React.Fragment>
      <AppBar />
      <NavBar />
      <div className="main-container" id="container">
        <div className="overlay"></div>
        <div className="search-overlay"></div>
        <DrawerNav />
        {props.children}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
