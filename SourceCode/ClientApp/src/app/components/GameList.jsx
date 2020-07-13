import React from "react";

const GameList = () => {
  return (
    <div class="gallery segments">
      <div class="container">
        <div class="section-title">
          <h3>Games</h3>
        </div>
        <div class="row">
          <div class="col s6">
            <div class="content">
              <a href="images/gallery1.jpg" data-lightbox="gallery">
                <img src="./assets/images/gallery1.jpg" alt="" />
              </a>
              <a href="gallery-details.html">
                <h6>Ludo</h6>
              </a>
            </div>
          </div>
          <div class="col s6">
            <div class="content">
              <a href="images/gallery2.jpg" data-lightbox="gallery">
                <img src="./assets/images/gallery2.jpg" alt="" />
              </a>
              <a href="gallery-details.html">
                <h6>8 Pool</h6>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s6">
            <div class="content">
              <a href="images/gallery3.jpg" data-lightbox="gallery">
                <img src="./assets/images/gallery3.jpg" alt="" />
              </a>
              <a href="gallery-details.html">
                <h6>Top Scorer</h6>
              </a>
            </div>
          </div>
          <div class="col s6">
            <div class="content">
              <a href="images/gallery4.jpg" data-lightbox="gallery">
                <img src="./assets/images/gallery4.jpg" alt="" />
              </a>
              <a href="gallery-details.html">
                <h6>The Best Players</h6>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s6">
            <div class="content">
              <a href="images/gallery5.jpg" data-lightbox="gallery">
                <img src="./assets/images/gallery5.jpg" alt="" />
              </a>
              <a href="gallery-details.html">
                <h6>The Best Players</h6>
              </a>
            </div>
          </div>
          <div class="col s6">
            <div class="content">
              <a href="images/gallery6.jpg" data-lightbox="gallery">
                <img src="./assets/images/gallery6.jpg" alt="" />
              </a>
              <a href="gallery-details.html">
                <h6>Best Match</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameList;
