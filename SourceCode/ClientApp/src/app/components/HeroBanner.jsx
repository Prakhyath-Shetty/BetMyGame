import React from "react";

export default function HeroBanner() {
  return (
    <div class="slide">
      <div class="slide-show owl-carousel owl-theme">
        <div class="slide-content">
          <div class="mask"></div>
          <img src="./assets/images/slider1.jpg" alt="" />
          <div class="caption">
            <span>PLAYER</span>
            <h4>
              The best players who have become public conversations during 2018
              season
            </h4>
            <p>
              Consectetur adipisicing elit. Praesentium, quae velit quisquam
              alias. Perferendis impedit
            </p>
          </div>
        </div>
        <div class="slide-content">
          <div class="mask"></div>
          <img src="./assets/images/slider2.jpg" alt="" />
          <div class="caption">
            <span>STADIUM</span>
            <h4>WOW, a stadium with a capacity of 100 thousand seats</h4>
            <p>
              Consectetur adipisicing elit. Praesentium, quae velit quisquam
              alias. Perferendis impedit
            </p>
          </div>
        </div>
        <div class="slide-content">
          <div class="mask"></div>
          <img src="./assets/images/slider3.jpg" alt="" />
          <div class="caption">
            <span>PLAYER</span>
            <h4>Preparations made by the players for the test match tonight</h4>
            <p>
              Consectetur adipisicing elit. Praesentium, quae velit quisquam
              alias. Perferendis impedit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
