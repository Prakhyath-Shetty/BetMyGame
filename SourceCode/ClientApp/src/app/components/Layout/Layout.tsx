import React from "react";
import { connect } from "react-redux";

import AppBar from "../AppBar/AppBar";
import BottomNav from "../BottomNav/BottomNav";
import DrawerNav from "../DrawerNav/DrawerNav";

const Layout = (props: any) => {
  return (
    <React.Fragment>
      <AppBar />
      <DrawerNav />
      {props.children}
      <BottomNav />
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
