import React, { Component } from "react";
import { connect } from "react-redux";
import GameList from "../../../components/GameList";
import HeroBanner from "../../../components/HeroBanner";

export const LandingPage = () => {
  return (
    <>
      <HeroBanner />
      <GameList />
    </>
  );
};

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
