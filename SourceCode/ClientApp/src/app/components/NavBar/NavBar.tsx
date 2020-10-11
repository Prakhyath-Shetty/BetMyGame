import React from "react";
import { connect } from "react-redux";

export const NavBar = () => {
  return (
    <div className="sub-header-container">
      <header className="header navbar navbar-expand-sm">
        <a
          href="javascript:void(0);"
          className="sidebarCollapse"
          data-placement="bottom"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </a>

        <ul className="navbar-nav flex-row">
          <li>
            <div className="page-header">
              <div className="page-title">
                <h3>Blank Page</h3>
              </div>
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
