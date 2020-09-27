import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { registerUser, validateOTP } from "../../shared/ducks/Auth/Auth.duck";
import { connect } from "react-redux";
import { IRegisterForm } from "./auth.models";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  userId: number;
  OTP: number;
}

interface IFormInputOTP {
  OTP: number;
}

interface IFormInputUserCredentials {
  userEmail: string;
  password: string;
  confirmPassword: string;
}

const phoneno = new RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);

function OTPHandler(props: any) {
  const otpValidationSchema = Yup.object({
    OTP: Yup.string().required("Please the OTP"),
  });
  const { user } = props;
  const { register, handleSubmit, errors } = useForm<IFormInputOTP>({
    resolver: yupResolver(otpValidationSchema),
  });
  const otpHandleSubmit = (data: IFormInputOTP) => {
    debugger;
    if (user === data.OTP) {
      props.handleOTP({ data });
    }
  };
  return (
    <div id="appCapsule">
      <div className="login-form">
        <div>
          <div className="section">
            <h1>OTP</h1>
            <h4>Fill the form to join us</h4>
          </div>
          <form onSubmit={handleSubmit(otpHandleSubmit)}>
            <div className="section mt-2 mb-5">
              <div className="form-group boxed">
                <div className="input-wrapper">
                  <input
                    className="form-control"
                    name="OTP"
                    placeholder="OTP"
                    ref={register({ required: true })}
                  />
                  <i className="clear-input"></i>
                  <div className="form-text text-muted small text-danger pl-3">
                    {errors.OTP && errors.OTP.message}
                  </div>
                </div>
              </div>

              <div className="mt-1 text-left">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg"
                >
                  Verify
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
function CreateAccount(props: any) {
  const createAccountSchema = Yup.object({
    userEmail: Yup.string()
      .email("Invalid email format")
      .required("Email-address is Required"),
    password: Yup.string()
      .required("This field is required")
      .min(8, "Password must have at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password field must contain mixture of characters"
      ),
    confirmPassword: Yup.string()
      .required("This field is required")
      .oneOf([Yup.ref("password"), ""], "Passwords must match"),
  });
  const { register, handleSubmit, errors } = useForm<IFormInputUserCredentials>(
    {
      resolver: yupResolver(createAccountSchema),
    }
  );
  const createAccountHandle = (data: IFormInputUserCredentials) => {
    props.createAccount({ data });
  };
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
          <form onSubmit={handleSubmit(createAccountHandle)}>
            <div className="form-group boxed">
              <div className="input-wrapper">
                <input
                  className="form-control"
                  name="userEmail"
                  placeholder="email-address"
                  ref={register({ required: true })}
                />
                <i className="clear-input">
                  {/* <ion-icon name="close-circle" /> */}
                </i>
                <div className="form-text text-muted small text-danger pl-3">
                  {errors.userEmail && errors.userEmail.message}
                </div>
              </div>
            </div>
            <div className="form-group boxed">
              <div className="input-wrapper">
                <input
                  className="form-control"
                  name="password"
                  type="password"
                  placeholder="Password"
                  ref={register({ required: true, minLength: 8 })}
                />
                <i className="clear-input">
                  {/* <ion-icon name="close-circle" /> */}
                </i>
                <div className="form-text text-muted small text-danger pl-3">
                  {errors.password && errors.password.message}
                </div>
              </div>
            </div>
            <div className="form-group boxed">
              <div className="input-wrapper">
                <input
                  className="form-control"
                  name="confirmPassword"
                  type="password"
                  placeholder="Password (Again)"
                  ref={register({ required: true })}
                />
                <i className="clear-input">
                  {/* <ion-icon name="close-circle" /> */}
                </i>
                <div className="form-text text-muted small text-danger pl-3">
                  {errors.confirmPassword && errors.confirmPassword.message}
                </div>
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
            <div className="form-button-group1">
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
function RegisterPageHandler(props: any) {
  const registerSchema = Yup.object({
    firstName: Yup.string().required("First-name is Required"),
    lastName: Yup.string().required("Last-name is Required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email-Address is Required"),
    phoneNumber: Yup.string()
      .required("Phone Number is Required")
      .matches(phoneno, "Phone number is not valid"),

    userId: Yup.string()
      .required("User-Id is Required")
      .matches(
        phoneno,
        "UserId must be 10 character long and must be a number"
      ),
  });

  const { register, handleSubmit, errors } = useForm<IRegisterForm>({
    resolver: yupResolver(registerSchema),
  });
  console.log("props", props);

  const onSubmit = (data: IRegisterForm) => {
    props.registerUser({
      data,
    });
  };

  console.log("errors", errors);
  return (
    <div id="appCapsule">
      <div className="login-form">
        <div>
          <div className="section">
            <h1>Register</h1>
            <h4>Fill the form to join us</h4>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="section mt-2 mb-5">
              <div className="form-group boxed">
                <div className="input-wrapper">
                  <input
                    className="form-control"
                    name="firstName"
                    placeholder="First-name"
                    ref={register({ required: true, maxLength: 20 })}
                  />
                  <i className="clear-input"></i>
                  <div className="form-text text-muted small text-danger pl-3">
                    {errors.firstName && "First name is required"}
                  </div>
                </div>
              </div>
              <div className="form-group boxed">
                <div className="input-wrapper">
                  <input
                    className="form-control"
                    name="lastName"
                    placeholder="Last-name"
                    ref={register({ required: true, maxLength: 20 })}
                  />
                  <i className="clear-input"></i>
                  <div className="form-text text-muted small text-danger pl-3">
                    {errors.lastName && "Last name is required"}
                  </div>
                </div>
              </div>
              <div className="form-group boxed">
                <div className="input-wrapper">
                  <input
                    className="form-control"
                    name="email"
                    placeholder="Email-address"
                    ref={register({ required: true })}
                  />
                  <i className="clear-input"></i>
                  <div className="form-text text-muted small text-danger pl-3">
                    {errors.email && errors.email.message}
                  </div>
                </div>
              </div>
              <div className="form-group boxed">
                <div className="input-wrapper">
                  <input
                    className="form-control"
                    name="phoneNumber"
                    placeholder="Phone-number"
                    ref={register({ required: true })}
                  />
                  <i className="clear-input"></i>
                  <div className="form-text text-muted small text-danger pl-3">
                    {errors.phoneNumber && errors.phoneNumber.message}
                  </div>
                </div>
              </div>
              <div className="form-group boxed">
                <div className="input-wrapper">
                  <input
                    className="form-control"
                    name="userId"
                    type="text"
                    placeholder="Userd-Id"
                    ref={register({ required: true })}
                  />
                  <i className="clear-input"></i>
                  <div className="form-text text-muted small text-danger pl-3">
                    {errors.userId && errors.userId.message}
                  </div>
                </div>
              </div>

              <div className="mt-1 text-left">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customChecka1"
                  />
                  <label
                    className="custom-control-label text-muted"
                    htmlFor="customChecka1"
                  >
                    I Agree <a href="">Terms & Conditions</a>
                  </label>
                </div>
              </div>

              <div className="form-button-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function RegisterPage(props: any) {
  const { user, registerStatus, otpStatus } = props;
  console.log("RegisterPage", props);

  //const isLoggedIn = props.isLoggedIn;
  if (registerStatus === 2) {
    if (otpStatus) {
      return <CreateAccount createAccount={props.createAccount} />;
    }
    return <OTPHandler handleOTP={props.handleOTP} user={user} />;
  } else {
    return <RegisterPageHandler registerUser={props.register} />;
  }
}
const mapStateToProps = (state: any) => {
  console.log("state", state.auth);
  const { user, otpStatus, registerStatus, registerInProgress } = state.auth;
  return {
    user,
    registerStatus,
    registerInProgress,
    otpStatus,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  register: (user: any) => dispatch(registerUser(user)),
  handleOTP: (otp: any) => dispatch(validateOTP(otp)),
  createAccount: (userInfo: any) => dispatch(validateOTP(userInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
