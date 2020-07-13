import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="container">
          <div class="row">
            <div class="col s6">
              <div class="content">
                <h4>More</h4>
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">News</a>
                  </li>
                  <li>
                    <a href="">Players</a>
                  </li>
                  <li>
                    <a href="">Standings</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col s6">
              <div class="content">
                <h4>Follow We</h4>
                <ul>
                  <li>
                    <a href="">
                      <i class="fab fa-facebook-f"></i>Facebook
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-twitter"></i>Twitter
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-instagram"></i>Instagram
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-google"></i>Google
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-text">
            <p>Copyright © All Right Reserved</p>
          </div>
        </div>
      </footer>
    );
  }
}
