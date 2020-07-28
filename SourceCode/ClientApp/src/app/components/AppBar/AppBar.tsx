import React, { Component } from "react";

export default class AppBar extends Component {
  render() {
    return (
      <div className="appHeader bg-primary scrolled">
        <div className="left">
          <a
            href="#"
            className="headerButton"
            data-toggle="modal"
            data-target="#sidebarPanel"
          >
            {/* <ion-icon name="menu-outline"></ion-icon> */}
          </a>
        </div>
        <div className="pageTitle">Discover</div>
        <div className="right">
          <a href="javascript:;" className="headerButton toggle-searchbox">
            {/* <ion-icon name="search-outline"></ion-icon> */}
          </a>
        </div>
      </div>
    );
  }
}
