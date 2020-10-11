import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/css/authentication/form-1.css";
import "../../assets/css/forms/theme-checkbox-radio.css";
import "../../assets/css/forms/switches.css";

export const RegisterPage = () => {
  return (
    <div className="form-container">
      <div className="form-form">
        <div className="form-form-wrap">
          <div className="form-container">
            <div className="form-content">
              <h1 className="">
                Get started with a <br /> free account
              </h1>
              <p className="signup-link">
                Already have an account? <a href="auth_login.html">Log in</a>
              </p>
              <form className="text-left">
                <div className="form">
                  <div id="username-field" className="field-wrapper input">
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
                      className="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                  {/* <div id="phone-field" className="field-wrapper input">
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
                      className="feather feather-at-sign"
                    >
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                    </svg>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      value=""
                      placeholder="Phone"
                    />
                  </div> */}
                  <div id="email-field" className="field-wrapper input">
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
                      className="feather feather-at-sign"
                    >
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                    </svg>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      value=""
                      placeholder="Email"
                    />
                  </div>

                  <div id="password-field" className="field-wrapper input mb-2">
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
                      className="feather feather-lock"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value=""
                      placeholder="Password"
                    />
                  </div>
                  <div className="field-wrapper terms_condition">
                    <div className="n-chk new-checkbox checkbox-outline-primary">
                      <label className="new-control new-checkbox checkbox-outline-primary">
                        <input type="checkbox" className="new-control-input" />
                        <span className="new-control-indicator"></span>
                        <span>
                          I agree to the{" "}
                          <a href="javascript:void(0);">
                            {" "}
                            terms and conditions{" "}
                          </a>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="d-sm-flex justify-content-between">
                    <div className="field-wrapper toggle-pass">
                      <p className="d-inline-block">Show Password</p>
                      <label className="switch s-primary">
                        <input
                          type="checkbox"
                          id="toggle-password"
                          className="d-none"
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <div className="field-wrapper">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        value=""
                      >
                        Get Started!
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <p className="terms-conditions">
                © 2019 All Rights Reserved. <a href="index.html">CORK</a> is a
                product of Designreset.{" "}
                <a href="javascript:void(0);">Cookie Preferences</a>,{" "}
                <a href="javascript:void(0);">Privacy</a>, and{" "}
                <a href="javascript:void(0);">Terms</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="form-image">
        <div className="l-image"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
