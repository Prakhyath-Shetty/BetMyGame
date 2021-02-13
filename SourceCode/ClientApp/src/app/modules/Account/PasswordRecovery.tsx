import React from "react";
import { connect } from "react-redux";

export const PasswordRecovery = () => {
  return (
    <div className="form-container">
      <div className="form-form">
        <div className="form-form-wrap">
          <div className="form-container">
            <div className="form-content">
              <h1 className="">Password Recovery</h1>
              <p className="signup-link">Enter your email and instructions will sent to you!</p>
              <form className="text-left">
                <div className="form">
                  <div id="email-field" className="field-wrapper input">
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
                      className="feather feather-at-sign"
                    >
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                    </svg>
                    <input id="email" name="email" type="text" value="" placeholder="Email" />
                  </div>
                  <div className="d-sm-flex justify-content-between">
                    <div className="field-wrapper">
                      <button type="submit" className="btn btn-primary" value="">
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <p className="terms-conditions">
                © 2019 All Rights Reserved. <a>CORK</a> is a product of Designreset. <a>Cookie Preferences</a>, <a>Privacy</a>,
                and <a>Terms</a>.
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

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordRecovery);
