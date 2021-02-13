import "../../assets/plugins/dropify/dropify.min.css";
import "../../assets/css/users/account-setting.css";
import React, { Fragment } from "react";
import { connect } from "react-redux";

export const SettingPage = () => {
  return (
    <Fragment>
      <div id="content" className="main-content">
        <div className="layout-px-spacing">
          <div className="account-settings-container layout-top-spacing">
            <div className="account-content">
              <div className="scrollspy-example" data-spy="scroll" data-target="#account-settings-scroll" data-offset="-100">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                    <form id="general-info" className="section general-info">
                      <div className="info">
                        <h6 className="">General Information</h6>
                        <div className="row">
                          <div className="col-lg-11 mx-auto">
                            <div className="row">
                              <div className="col-xl-2 col-lg-12 col-md-4">
                                <div className="upload mt-4 pr-md-4">
                                  <input
                                    type="file"
                                    id="input-file-max-fs"
                                    className="dropify"
                                    data-default-file="../../assets/img/200x200.jpg"
                                    data-max-file-size="2M"
                                  />
                                  <p className="mt-2">
                                    <i className="flaticon-cloud-upload mr-1"></i> Upload Picture
                                  </p>
                                </div>
                              </div>
                              <div className="col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4">
                                <div className="form">
                                  <div className="row">
                                    <div className="col-sm-6">
                                      <div className="form-group">
                                        <label htmlFor="fullName">Full Name</label>
                                        <input
                                          type="text"
                                          className="form-control mb-4"
                                          id="fullName"
                                          placeholder="Full Name"
                                          value="Jimmy Turner"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <label className="dob-input">Date of Birth</label>
                                      <div className="d-sm-flex d-block">
                                        <div className="form-group mr-1">
                                          <select className="form-control" id="exampleFormControlSelect1">
                                            <option>Day</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>
                                            <option selected>20</option>
                                            <option>21</option>
                                            <option>22</option>
                                            <option>23</option>
                                            <option>24</option>
                                            <option>25</option>
                                            <option>26</option>
                                            <option>27</option>
                                            <option>28</option>
                                            <option>29</option>
                                            <option>30</option>
                                          </select>
                                        </div>
                                        <div className="form-group mr-1">
                                          <select className="form-control" id="month">
                                            <option>Month</option>
                                            <option selected>Jan</option>
                                            <option>Feb</option>
                                            <option>Mar</option>
                                            <option>Apr</option>
                                            <option>May</option>
                                            <option>Jun</option>
                                            <option>Jul</option>
                                            <option>Aug</option>
                                            <option>Sep</option>
                                            <option>Oct</option>
                                            <option>Nov</option>
                                            <option>Dec</option>
                                          </select>
                                        </div>
                                        <div className="form-group mr-1">
                                          <select className="form-control" id="year">
                                            <option>Year</option>
                                            <option>2018</option>
                                            <option>2017</option>
                                            <option>2016</option>
                                            <option>2015</option>
                                            <option>2014</option>
                                            <option>2013</option>
                                            <option>2012</option>
                                            <option>2011</option>
                                            <option>2010</option>
                                            <option>2009</option>
                                            <option>2008</option>
                                            <option>2007</option>
                                            <option>2006</option>
                                            <option>2005</option>
                                            <option>2004</option>
                                            <option>2003</option>
                                            <option>2002</option>
                                            <option>2001</option>
                                            <option>2000</option>
                                            <option>1999</option>
                                            <option>1998</option>
                                            <option>1997</option>
                                            <option>1996</option>
                                            <option>1995</option>
                                            <option>1994</option>
                                            <option>1993</option>
                                            <option>1992</option>
                                            <option>1991</option>
                                            <option>1990</option>
                                            <option selected={true}>1989</option>
                                            <option>1988</option>
                                            <option>1987</option>
                                            <option>1986</option>
                                            <option>1985</option>
                                            <option>1984</option>
                                            <option>1983</option>
                                            <option>1982</option>
                                            <option>1981</option>
                                            <option>1980</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="profession">Profession</label>
                                    <input
                                      type="text"
                                      className="form-control mb-4"
                                      id="profession"
                                      placeholder="Designer"
                                      value="Web Developer"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                    <form id="contact" className="section contact">
                      <div className="info">
                        <h5 className="">Contact</h5>
                        <div className="row">
                          <div className="col-md-11 mx-auto">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="country">Country</label>
                                  <select className="form-control" id="country">
                                    <option>All Countries</option>
                                    <option selected>United States</option>
                                    <option>India</option>
                                    <option>Japan</option>
                                    <option>China</option>
                                    <option>Brazil</option>
                                    <option>Norway</option>
                                    <option>Canada</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="address">Address</label>
                                  <input
                                    type="text"
                                    className="form-control mb-4"
                                    id="address"
                                    placeholder="Address"
                                    value="New York"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="location">Location</label>
                                  <input type="text" className="form-control mb-4" id="location" placeholder="Location" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="phone">Phone</label>
                                  <input
                                    type="text"
                                    className="form-control mb-4"
                                    id="phone"
                                    placeholder="Write your phone number here"
                                    value="+1 (530) 555-12121"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="email">Email</label>
                                  <input
                                    type="text"
                                    className="form-control mb-4"
                                    id="email"
                                    placeholder="Write your email here"
                                    value="Jimmy@gmail.com"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="website1">Website</label>
                                  <input
                                    type="text"
                                    className="form-control mb-4"
                                    id="website1"
                                    placeholder="Write your website here"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />

            <div className="account-settings-footer">
              <div className="as-footer-container">
                <button id="multiple-reset" className="btn btn-primary">
                  Reset All
                </button>
                <div className="blockui-growl-message">
                  <i className="flaticon-double-check"></i>&nbsp; Settings Saved Successfully
                </div>
                <button id="multiple-messages" className="btn btn-dark">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SettingPage);
