import React from "react";
import { connect } from "react-redux";

export const LandingPage = () => {
  return (
    <div>
      <h1>Hello,BetMyGame Project is under construction</h1>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
