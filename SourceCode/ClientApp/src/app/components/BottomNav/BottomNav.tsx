import React, { Component } from "react";
import MaterialIcon from "@material/react-material-icon";
export default class BottomNav extends Component {
  render() {
    return (
      <div>
        {/* App Bottom Menu */}
        <div className="appBottomMenu">
          <a href="index.html" className="item active">
            <div className="col">
              {/* <ion-icon name="home-outline" /> */}
              <MaterialIcon icon="dashboard" />
            </div>
          </a>
          <a href="app-components.html" className="item">
            <div className="col">
              {/* <ion-icon name="cube-outline" /> */}
              <MaterialIcon icon="alarm_on" />
            </div>
          </a>
          <a href="page-chat.html" className="item">
            <div className="col">
              {/* <ion-icon name="chatbubble-ellipses-outline" /> */}
              <MaterialIcon icon="list icon" />
              <span className="badge badge-danger">5</span>
            </div>
          </a>
          <a href="app-pages.html" className="item">
            <div className="col">
              {/* <ion-icon name="layers-outline" /> */}
              <MaterialIcon icon="event_seat" />
            </div>
          </a>
          <a
            href="javascript:;"
            className="item"
            data-toggle="modal"
            data-target="#sidebarPanel"
          >
            <div className="col">
              {/* <ion-icon name="menu-outline" /> */}
              <MaterialIcon icon="keyboard icon" />
            </div>
          </a>
        </div>
        ;{/* * App Bottom Menu */}
      </div>
    );
  }
}
