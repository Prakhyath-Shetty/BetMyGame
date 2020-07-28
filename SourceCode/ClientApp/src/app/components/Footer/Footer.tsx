import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* app footer */}
        <div className="appFooter">
          <img
            src="assets/img/logo.png"
            alt="icon"
            className="footer-logo mb-2"
          />
          <div className="footer-title">
            Copyright © Mobilekit 2020. All Rights Reserved.
          </div>
          <div>Mobilekit is PWA ready Mobile UI Kit Template.</div>
          Great way to start your mobile websites and pwa projects.
          <div className="mt-2">
            <a href="#" className="btn btn-icon btn-sm btn-facebook">
              {/* <ion-icon name="logo-facebook" /> */}
            </a>
            <a href="#" className="btn btn-icon btn-sm btn-twitter">
              {/* <ion-icon name="logo-twitter" /> */}
            </a>
            <a href="#" className="btn btn-icon btn-sm btn-linkedin">
              {/* <ion-icon name="logo-linkedin" /> */}
            </a>
            <a href="#" className="btn btn-icon btn-sm btn-instagram">
              {/* <ion-icon name="logo-instagram" /> */}
            </a>
            <a href="#" className="btn btn-icon btn-sm btn-whatsapp">
              {/* <ion-icon name="logo-whatsapp" /> */}
            </a>
            <a href="#" className="btn btn-icon btn-sm btn-secondary goTop">
              {/* <ion-icon name="arrow-up-outline" /> */}
            </a>
          </div>
        </div>
        ;{/* * app footer */}
      </div>
    );
  }
}
