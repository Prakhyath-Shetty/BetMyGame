import React from "react";
import { connect } from "react-redux";
import Layout from "../../components/Layout/Layout";

export const LandingPage = () => {
  return (
    <div>
      <Layout></Layout>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
