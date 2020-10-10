import React, { Fragment } from "react";
import { connect } from "react-redux";
import AppFooter from "../../components/AppFooter/AppFooter";

export const LandingPage = () => {
  return (
    <Fragment>
      <div id="content" className="main-content">
        <div className="layout-px-spacing">
          <div className="row layout-top-spacing"></div>
        </div>
        <AppFooter />
      </div>
    </Fragment>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
