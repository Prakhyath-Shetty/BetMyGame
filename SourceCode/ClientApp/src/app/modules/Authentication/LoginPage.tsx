import React from "react";

export default function LoginPage() {
  return (
    <div id="appCapsule" className="pt-0">
      <div className="login-form mt-1">
        <div className="section">
          <img
            src="assets/img/sample/photo/vector4.png"
            alt="image"
            className="form-image"
          />
        </div>
        <div className="section mt-1">
          <h1>Get started</h1>
          <h4>Fill the form to log in</h4>
        </div>
        <div className="section mt-1 mb-5">
          <form action="https://mobilekit.bragherstudio.com/view5/app-pages.html">
            <div className="form-group boxed">
              <div className="input-wrapper">
                <input
                  type="email"
                  className="form-control"
                  id="email1"
                  placeholder="Email address"
                />
                <i className="clear-input">
                  {/* <ion-icon name="close-circle" /> */}
                </i>
              </div>
            </div>
            <div className="form-group boxed">
              <div className="input-wrapper">
                <input
                  type="password"
                  className="form-control"
                  id="password1"
                  placeholder="Password"
                />
                <i className="clear-input">
                  {/* <ion-icon name="close-circle" /> */}
                </i>
              </div>
            </div>
            <div className="form-links mt-2">
              <div>
                <a href="page-register.html">Register Now</a>
              </div>
              <div>
                <a href="page-forgot-password.html" className="text-muted">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="form-button-group">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
