import React, { useState, Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "../../components/ErrorMessage/ErrorMessage";
import { registerUser } from "../../shared/ducks/Auth/Auth.duck";
import { connect } from "react-redux";
import { Redirect } from "react-router";

interface RegisterPageProps {
  user: number;
  registerStatus: number;
  registerInProgress: boolean;
  registerUser: any;
}

interface RegisterPageState {
  formValues: null;
  redirectToLogin: boolean;
}
export class RegisterPage extends Component<
  RegisterPageProps,
  RegisterPageState
> {
  constructor(props: any) {
    super(props);
    this.state = { formValues: null, redirectToLogin: false };
  }
  render() {
    const { user, registerStatus, registerInProgress } = this.props;
    const { formValues, redirectToLogin } = this.state;
    const initialValues = {
      userId: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      OTP: "",
    };

    const handleSubmit = (values: any, submitProps: any) => {
      submitProps.setSubmitting(false);
      this.props.registerUser({
        values,
      });
      submitProps.resetForm();
    };

    const otpHandleSubmit = (values: any, submitProps: any) => {
      debugger;
      console.log("Form data", values);
      console.log("Form user", user);
      submitProps.setSubmitting(false);
      if (values.OTP === user) {
        this.setState({ redirectToLogin: true });
      }
      submitProps.resetForm();
    };
    const phoneno = new RegExp(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    );
    const validationSchema = Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      phoneNumber: Yup.string()
        .matches(phoneno, "Phone number is not valid")
        .required("Required"),
      userId: Yup.string()
        .matches(
          phoneno,
          "UserId must be 10 character long and must be a number"
        )
        .required("Required"),
    });
    const otpValidationSchema = Yup.object({
      OTP: Yup.string().required("Required"),
    });
    if (redirectToLogin) {
      return <Redirect to="/LoginPage" />;
    }
    return (
      <div id="appCapsule">
        <div className="login-form">
          <Formik
            initialValues={formValues || initialValues}
            validationSchema={
              registerStatus == 2 ? otpValidationSchema : validationSchema
            }
            onSubmit={registerStatus == 2 ? otpHandleSubmit : handleSubmit}
            enableReinitialize
          >
            {(formik) => {
              console.log("Formik props", formik);
              return (
                <Form translate="true">
                  {registerStatus == 2 ? (
                    <div>
                      <div className="section">
                        <h1>OTP</h1>
                        <h4>Fill the form to join us</h4>
                      </div>
                      <div className="section mt-2 mb-5">
                        <div className="form-group boxed">
                          <div className="input-wrapper">
                            <Field
                              className="form-control"
                              type="text"
                              id="OTP"
                              name="OTP"
                              placeholder=" Enter OTP"
                            />
                            <i className="clear-input">
                              {/* <ion-icon name="close-circle" /> */}
                            </i>
                            <div className="form-text text-muted small text-danger pl-3">
                              <ErrorMessage name="OTP" component={TextError} />
                            </div>
                          </div>
                        </div>
                        <div className="mt-1 text-left">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block btn-lg"
                            disabled={!formik.isValid || formik.isSubmitting}
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="section">
                        <h1>Register</h1>
                        <h4>Fill the form to join us</h4>
                      </div>
                      <div className="section mt-2 mb-5">
                        <div className="form-group boxed">
                          <div className="input-wrapper">
                            <Field
                              className="form-control"
                              type="text"
                              id="firstName"
                              name="firstName"
                              placeholder="First name"
                            />
                            <i className="clear-input">
                              {/* <ion-icon name="close-circle" /> */}
                            </i>
                            <div className="form-text text-muted small text-danger pl-3">
                              <ErrorMessage
                                name="firstName"
                                component={TextError}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group boxed">
                          <div className="input-wrapper">
                            <Field
                              className="form-control"
                              type="text"
                              id="lastName"
                              name="lastName"
                              placeholder="Last name"
                            />
                            <i className="clear-input">
                              {/* <ion-icon name="close-circle" /> */}
                            </i>
                            <div className="form-text text-muted small text-danger pl-3">
                              <ErrorMessage
                                name="lastName"
                                component={TextError}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group boxed">
                          <div className="input-wrapper">
                            <Field
                              className="form-control"
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Email Address"
                            />
                            <i className="clear-input">
                              {/* <ion-icon name="close-circle" /> */}
                            </i>
                            <div className="form-text text-muted small text-danger pl-3">
                              <ErrorMessage name="email">
                                {(error) => (
                                  <div className="error">{error}</div>
                                )}
                              </ErrorMessage>
                            </div>
                          </div>
                        </div>
                        <div className="form-group boxed">
                          <div className="input-wrapper">
                            <Field
                              className="form-control"
                              type="text"
                              id="phoneNumber"
                              name="phoneNumber"
                              placeholder="Phone Number"
                            />
                            <i className="clear-input">
                              {/* <ion-icon name="close-circle" /> */}
                            </i>
                            <div className="form-text text-muted small text-danger pl-3">
                              <ErrorMessage name="phoneNumber">
                                {(error) => (
                                  <div className="danger">{error}</div>
                                )}
                              </ErrorMessage>
                            </div>
                          </div>
                        </div>
                        <div className="form-group boxed">
                          <div className="input-wrapper">
                            <Field
                              className="form-control"
                              type="text"
                              id="userId"
                              name="userId"
                              placeholder="User Id"
                            />
                            <i className="clear-input">
                              {/* <ion-icon name="close-circle" /> */}
                            </i>
                            <div className="form-text text-muted small text-danger pl-3">
                              <ErrorMessage name="userId">
                                {(error) => (
                                  <div className="error">{error}</div>
                                )}
                              </ErrorMessage>
                            </div>
                          </div>
                        </div>

                        <div className="mt-1 text-left">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block btn-lg"
                            disabled={!formik.isValid || formik.isSubmitting}
                          >
                            Verify
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  console.log("state", state.auth);
  const { user, registerStatus, registerInProgress } = state.auth;
  return {
    user,
    registerStatus,
    registerInProgress,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  registerUser: (user: any) => dispatch(registerUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
