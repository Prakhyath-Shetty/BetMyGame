import React, { Component } from "react";
import MaterialIcon from "@material/react-material-icon";
export default class AppBar extends Component {
  render() {
    return (
      <div>
        {/* Search Component */}
        <div id="search" className="appHeader">
          <form className="search-form">
            <div className="form-group searchbox">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
              <i className="input-icon">
                {/* <ion-icon name="search-outline" /> */}
                <MaterialIcon icon="menu" />
              </i>
              <a href="#" className="ml-1 close toggle-searchbox">
                {/* <ion-icon name="close-circle" /> */}
                <MaterialIcon icon="menu" />
              </a>
            </div>
          </form>
        </div>
        {/* * Search Component */}
        <div className="appHeader bg-primary scrolled">
          <div className="left">
            <a
              href="#"
              className="headerButton"
              data-toggle="modal"
              data-target="#sidebarPanel"
            >
              {/* <ion-icon name="menu-outline" /> */}
              <MaterialIcon icon="input" />
            </a>
          </div>
          <div className="pageTitle">Discover</div>
          <div className="right">
            <a href="#" className="headerButton toggle-searchbox">
              {/* <ion-icon name="search-outline" /> */}
              <MaterialIcon icon="menu" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
