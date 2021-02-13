import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import routeConfiguration from "../../configureRoute";
import { IRouteConfig } from "../../shared/models/Common.model";

export const DrawerNav = () => {
  const routes: IRouteConfig[] = routeConfiguration();
  const navModules: IRouteConfig[] = routes.filter((route) => route.isNavMenu);
  return (
    <div className="sidebar-wrapper sidebar-theme">
      <nav id="sidebar">
        <div className="shadow-bottom"></div>
        <ul className="list-unstyled menu-categories" id="accordionExample">
          {navModules.map((nav, index) => {
            return (
              <li key={index} className="menu">
                <a
                  href={"#submenu" + index}
                  data-active="false"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-home"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span>{nav.title}</span>
                  </div>
                  {nav.children && nav.children.length && (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-right"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  )}
                </a>
                {nav.children && nav.children.length && (
                  <ul className="submenu list-unstyled collapse show" id={"submenu" + index} data-parent="#accordionExample">
                    {nav.children.map((subNav, i) => {
                      return (
                        <li key={i}>
                          <Link to={subNav.path}> {subNav.title} </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNav);
