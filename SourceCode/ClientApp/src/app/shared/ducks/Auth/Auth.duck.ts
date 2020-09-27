import { Action, Reducer } from "redux";
import { IUser } from "../../models/User.model";
import { HttpStatus } from "../../enum/HttpStatus";
import axios from "axios";
// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface AuthState {
  registerInProgress: boolean;
  registerStatus: HttpStatus;
  user: IUser | null;
  otpStatus: boolean;
  isLoggedIn: boolean;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

export interface RegisterRequestAction {
  type: "REGISTER_REQUEST";
}
export interface RegisterSuccessAction {
  type: "REGISTER_SUCCESS";
  payload: IUser;
}
export interface RegisterErrorAction {
  type: "REGISTER_ERROR";
  payload: any;
}
export interface ValidateOTPSuccessAction {
  type: "OTP_SUCCESS";
  payload: any;
}
export interface ValidateOTPErrorAction {
  type: "OTP_ERROR";
  payload: any;
}
// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction =
  | RegisterRequestAction
  | RegisterSuccessAction
  | RegisterErrorAction
  | ValidateOTPSuccessAction
  | ValidateOTPErrorAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
  registerRequest: () =>
    ({ type: "REGISTER_REQUEST" } as RegisterRequestAction),
  registerSuccess: (user: any) =>
    ({ type: "REGISTER_SUCCESS", payload: user } as RegisterSuccessAction),
  registerError: (error: any) =>
    ({ type: "REGISTER_ERROR", payload: error } as RegisterErrorAction),
  validateOTPSuccess: (data: any) =>
    ({ type: "OTP_SUCCESS", payload: data } as ValidateOTPSuccessAction),
  validateOTPError: (error: any) =>
    ({ type: "OTP_ERROR", payload: error } as ValidateOTPErrorAction),
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<AuthState> = (
  state: AuthState | undefined,
  incomingAction: Action
): AuthState => {
  console.log("state", state);
  if (state === undefined) {
    return {
      registerInProgress: false,
      registerStatus: HttpStatus.none,
      user: {
        firstName: "",
        lastName: "",
        phoneNumber: 1,
        email: "",
        userId: 1,
      },
      otpStatus: false,
      isLoggedIn: false,
    };
  }

  const action = incomingAction as KnownAction;
  switch (action.type) {
    case "REGISTER_REQUEST":
      return {
        ...state,
        registerInProgress: true,
        registerStatus: HttpStatus.pending,
        user: null,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        registerInProgress: false,
        registerStatus: HttpStatus.success,
        user: action.payload,
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        registerInProgress: false,
        registerStatus: HttpStatus.error,
        user: null,
      };
    case "OTP_SUCCESS":
      return {
        ...state,
        registerInProgress: false,
        registerStatus: HttpStatus.success,
        otpStatus: action.payload,
      };
    case "OTP_ERROR":
      return {
        ...state,
        registerInProgress: false,
        registerStatus: HttpStatus.error,
        otpStatus: false,
      };
    default:
      return state;
  }
};

// * Api Calls
export const registerUser = (user: IUser) => {
  debugger;
  const { email, firstName, lastName, phoneNumber, userId } = user;
  return (dispatch: any) => {
    dispatch(actionCreators.registerRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response: any) => {
        var otpNumber = sendOTP(phoneNumber);
        dispatch(actionCreators.registerSuccess(otpNumber));
      })
      .catch((err: any) => {
        dispatch(actionCreators.registerError(err.message));
      });
  };
};

export const sendOTP = (phoneNumber: number) => {
  return "123";
};

export const validateOTP = (otp: number) => {
  debugger;
  return (dispatch: any) => {
    //dispatch(actionCreators.registerRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response: any) => {
        dispatch(actionCreators.validateOTPSuccess(true));
      })
      .catch((err: any) => {
        dispatch(actionCreators.validateOTPError(err.message));
      });
  };
};

export const USER_LOGOUT = () => {
  return "valid";
};