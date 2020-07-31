import React, { Component, Fragment } from "react";
import {
  IoIosApps,
  IoIosChatbubbles,
  IoIosHome,
  IoIosSettings,
  IoMdCube,
} from "react-icons/io";

export default class BottomNav extends Component {
  render() {
    return (
      <Fragment>
        <div className="appBottomMenu">
          <a href="index.html" className="item active">
            <div className="col">
              <IoIosHome size="26px" />
            </div>
          </a>
          <a href="app-components.html" className="item">
            <div className="col">
              <IoMdCube size="26px" />
            </div>
          </a>
          <a href="page-chat.html" className="item">
            <div className="col">
              <IoIosChatbubbles size="26px" />
              <span className="badge badge-danger">5</span>
            </div>
          </a>
          <a href="app-pages.html" className="item">
            <div className="col">
              <IoIosApps size="26px" />
            </div>
          </a>
          <a
            href="settings"
            className="item"
            data-toggle="modal"
            data-target="#sidebarPanel"
          >
            <div className="col">
              <IoIosSettings size="26px" />
            </div>
          </a>
        </div>
      </Fragment>
    );
  }
}
