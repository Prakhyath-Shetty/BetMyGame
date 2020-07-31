import React, { Component } from "react";

export default class DrawerNav extends Component {
  render() {
    return (
      <>
        {/* <!-- App Sidebar --> */}
        <div
          className="modal fade panelbox panelbox-left show"
          id="sidebarPanel"
          tabIndex={-1}
          role="dialog"
          // style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body p-0">
                {/* <!-- profile box --> */}
                <div className="profileBox">
                  <div className="image-wrapper">
                    <img
                      src="assets/img/sample/avatar/avatar1.jpg"
                      alt="image"
                      className="imaged rounded"
                    />
                  </div>
                  <div className="in">
                    <strong>Julian Gruber</strong>
                    <div className="text-muted">
                      {/* <ion-icon name="location"></ion-icon> */}
                      California
                    </div>
                  </div>
                  <a
                    href=""
                    className="close-sidebar-button"
                    data-dismiss="modal"
                  >
                    {/* <ion-icon name="close"></ion-icon> */}
                  </a>
                </div>
                {/* <!-- * profile box --> */}

                <ul className="listview flush transparent no-line image-listview mt-2">
                  <li>
                    <a href="index.html" className="item">
                      <div className="icon-box bg-primary">
                        {/* <ion-icon name="home-outline"></ion-icon> */}
                      </div>
                      <div className="in">Discover</div>
                    </a>
                  </li>
                  <li>
                    <a href="app-components.html" className="item">
                      <div className="icon-box bg-primary">
                        {/* <ion-icon name="cube-outline"></ion-icon> */}
                      </div>
                      <div className="in">Components</div>
                    </a>
                  </li>
                  <li>
                    <a href="app-pages.html" className="item">
                      <div className="icon-box bg-primary">
                        {/* <ion-icon name="layers-outline"></ion-icon> */}
                      </div>
                      <div className="in">
                        <div>Pages</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="page-chat.html" className="item">
                      <div className="icon-box bg-primary">
                        {/* <ion-icon name="chatbubble-ellipses-outline"></ion-icon> */}
                      </div>
                      <div className="in">
                        <div>Chat</div>
                        <span className="badge badge-danger">5</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="item">
                      <div className="icon-box bg-primary">
                        {/* <ion-icon name="moon-outline"></ion-icon> */}
                      </div>
                      <div className="in">
                        <div>Dark Mode</div>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input dark-mode-switch"
                            id="darkmodesidebar"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="darkmodesidebar"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="listview-title mt-2 mb-1">
                  <span>Friends</span>
                </div>
                <ul className="listview image-listview flush transparent no-line">
                  <li>
                    <a href="page-chat.html" className="item">
                      <img
                        src="assets/img/sample/avatar/avatar7.jpg"
                        alt=""
                        className="image"
                      />
                      <div className="in">
                        <div>Sophie Asveld</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="page-chat.html" className="item">
                      <img
                        src="assets/img/sample/avatar/avatar3.jpg"
                        alt=""
                        className="image"
                      />
                      <div className="in">
                        <div>Sebastian Bennett</div>
                        <span className="badge badge-danger">6</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="page-chat.html" className="item">
                      <img
                        src="assets/img/sample/avatar/avatar10.jpg"
                        alt="image"
                        className="image"
                      />
                      <div className="in">
                        <div>Beth Murphy</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="page-chat.html" className="item">
                      <img
                        src="assets/img/sample/avatar/avatar2.jpg"
                        alt="image"
                        className="image"
                      />
                      <div className="in">
                        <div>Amelia Cabal</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="page-chat.html" className="item">
                      <img
                        src="assets/img/sample/avatar/avatar5.jpg"
                        alt="image"
                        className="image"
                      />
                      <div className="in">
                        <div>Henry Doe</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sidebar-buttons">
                <a href="" className="button">
                  {/* <ion-icon name="person-outline"></ion-icon> */}
                </a>
                <a href="" className="button">
                  {/* <ion-icon name="archive-outline"></ion-icon> */}
                </a>
                <a href="" className="button">
                  {/* <ion-icon name="settings-outline"></ion-icon> */}
                </a>
                <a href="" className="button">
                  {/* <ion-icon name="log-out-outline"></ion-icon> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
