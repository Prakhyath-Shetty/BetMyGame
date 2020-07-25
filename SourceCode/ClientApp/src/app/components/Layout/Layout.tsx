import React from "react";
import { connect } from "react-redux";

const Layout = (props: any) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
