import "../../assets/css/plugins.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import AppBar from "../AppBar/AppBar";
import { DrawerNav } from "../DrawerNav/DrawerNav";
import { NavBar } from "../NavBar/NavBar";

const Layout = (props: any) => {
  const [isNavOpen, setNavState] = useState(true);
  const onToggleNavBar = () => {
    setNavState(!isNavOpen);
    var element = document.getElementById("body");
    if (isNavOpen) {
      if (element) element.classList.add("sidebar-noneoverflow");
    } else {
      if (element) element.classList.remove("sidebar-noneoverflow");
    }

    console.log("onToggleNavBar");
  };

  const onCloseNavBar = () => {
    setNavState(true);
    var element = document.getElementById("body");
    if (element) element.classList.remove("sidebar-noneoverflow");
  };

  return (
    <React.Fragment>
      <AppBar isNavOpen={isNavOpen} onCloseNavBar={onCloseNavBar} />
      <NavBar onToggleNavBar={onToggleNavBar} />
      <div className={isNavOpen ? "main-container sbar-open" : "main-container sidebar-closed"} id="container">
        <div className={isNavOpen ? "overlay show" : "overlay"}></div>
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
