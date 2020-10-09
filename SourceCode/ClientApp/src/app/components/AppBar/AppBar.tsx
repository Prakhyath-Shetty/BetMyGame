import React, { Component } from "react";
import { IoMdMenu, IoMdSearch } from "react-icons/io";
import { connect } from "react-redux";
import { compose } from "redux";
import { NavLink } from "react-router-dom";

export class AppBar extends Component {
  onToggleSidebar = () => {
    // ! dispatch action here
  };
  signUp = () => {};
  render() {
    return (
      <React.Fragment>
        <div className="appHeader bg-primary scrolled">
          <div className="left">
            <a
              href="ggg"
              className="headerButton"
              data-toggle="modal"
              data-target="#sidebarPanel"
              onClick={() => {
                this.onToggleSidebar();
              }}
            >
              <IoMdMenu size={"26px"} />
            </a>
          </div>
          <div className="right" style={{ marginRight: "120px" }}>
            <a
              className="headerButton"
              data-toggle="modal"
              data-target="#sidebarPanel"
              href="/RegisterPage"
              // activeClassName="active-link"
              //isActive={checkActive}
            >
              Register
            </a>
          </div>
          <div className="right" style={{ paddingRight: "50px" }}>
            <a
              className="headerButton"
              data-toggle="modal"
              data-target="#sidebarPanel"
              href="/LoginPage"
              // activeClassName="active-link"
              //isActive={checkActive}
            >
              Login
            </a>
          </div>
          <div className="pageTitle">Discover</div>
          <div className="right">
            <a href="hh" className="headerButton toggle-searchbox">
              <IoMdSearch size={"26px"} />
            </a>
          </div>
        </div>

        {/* <!-- Search Component --> */}
        {/* <div id="search" className="appHeader">
          <form className="search-form">
            <div className="form-group searchbox">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
              <i className="input-icon">
                <ion-icon name="search-outline"></ion-icon>
              </i>
              <a href="hh" className="ml-1 close toggle-searchbox">
                <ion-icon name="close-circle"></ion-icon>
              </a>
            </div>
          </form>
        </div> */}
        {/* <!-- * Search Component --> */}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    history: state.history,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
