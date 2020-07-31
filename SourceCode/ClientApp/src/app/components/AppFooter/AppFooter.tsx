import React, { Fragment } from "react";

export default function AppFooter() {
  return (
    <Fragment>
      {/* <!-- app footer --> */}
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
          <a href="" className="btn btn-icon btn-sm btn-facebook">
            {/* <ion-icon name="logo-facebook"></ion-icon> */}
          </a>
          <a href="" className="btn btn-icon btn-sm btn-twitter">
            {/* <ion-icon name="logo-twitter"></ion-icon> */}
          </a>
          <a href="" className="btn btn-icon btn-sm btn-linkedin">
            {/* <ion-icon name="logo-linkedin"></ion-icon> */}
          </a>
          <a href="" className="btn btn-icon btn-sm btn-instagram">
            {/* <ion-icon name="logo-instagram"></ion-icon> */}
          </a>
          <a href="" className="btn btn-icon btn-sm btn-whatsapp">
            {/* <ion-icon name="logo-whatsapp"></ion-icon> */}
          </a>
          <a href="#" className="btn btn-icon btn-sm btn-secondary goTop">
            {/* <ion-icon name="arrow-up-outline"></ion-icon> */}
          </a>
        </div>
      </div>
      {/* <!-- * app footer --> */}
    </Fragment>
  );
}
