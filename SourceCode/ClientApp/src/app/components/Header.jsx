import React, { Component, Fragment } from "react";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <div class="navbar">
          <div class="container">
            <div class="row">
              <div class="col s3">
                <div class="content-left">
                  <a
                    href="#slide-out"
                    data-activates="slide-out"
                    class="sidebar"
                  >
                    <i class="fas fa-bars"></i>
                  </a>
                </div>
              </div>
              <div class="col s6">
                <div class="content-center">
                  <a href="index.html">
                    <h1>
                      <span>D</span>evend
                    </h1>
                  </a>
                </div>
              </div>
              {/* <div class="col s3">
                <div class="content-right">
                  <a href="#modal1" class="modal-trigger">
                    <i class="fas fa-search"></i>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div class="sidebar-panel">
          <ul id="slide-out" class="collapsible side-nav">
            <li>
              <div class="user-view">
                <img
                  class="circle responsive-img"
                  src="images/author.png"
                  alt=""
                />
                <h5>John Doe</h5>
                <span>Developer</span>
              </div>
            </li>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="matches.html">Matches</a>
            </li>
            <li>
              <a href="standings.html">Standings</a>
            </li>
            <li>
              <a href="stats.html">Stats</a>
            </li>
            <li>
              <a href="players.html">Players</a>
            </li>
            <li>
              <a href="news.html">News</a>
            </li>
            <li>
              <div class="collapsible-header">
                Pages
                <span>
                  <i class="fas fa-circle"></i>
                </span>
              </div>
              <div class="collapsible-body">
                <ul>
                  <li>
                    <a href="accordion.html">Accordion</a>
                  </li>
                  <li>
                    <a href="calendar.html">Calendar</a>
                  </li>
                  <li>
                    <a href="tabs.html">Tabs</a>
                  </li>
                  <li>
                    <a href="sign-in.html">Sign In</a>
                  </li>
                  <li>
                    <a href="sign-up.html">Sign Up</a>
                  </li>
                  <li>
                    <a href="settings.html">Settings</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="index.html">Log Out</a>
            </li>
          </ul>
        </div>

        {/* <!-- search --> */}
        {/* <div id="modal1" class="modal">
          <div class="modal-content">
            <form>
              <input type="text" placeholder="Search" />
              <button class="button">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div> */}
        {/* <!-- end search --> */}
      </Fragment>
    );
  }
}
