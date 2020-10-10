import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { History } from "history";
import { ApplicationState, reducers } from "./reducers";
import { USER_LOGOUT } from "./shared/ducks/Auth/Auth.duck";

export default function configureStore(
  history: History,
  initialState?: ApplicationState
) {
  const middleware = [thunk, routerMiddleware(history)];

  const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history),
  });

  /* *
   * Function _createReducer_ combines global reducers (reducers that are used in
   * multiple pages) and reducers that are handling actions happening inside one page container.
   * Since we combineReducers, pageReducers will get page specific key (e.g. SearchPage)
   * which is page specific.
   * Future: this structure could take in asyncReducers, which are changed when you navigate pages.
   */
  const createReducer = () => {
    return (state: any, action: { type: any }) => {
      const appState = action.type === USER_LOGOUT ? undefined : state;

      // * Clear sessionStorage when logging out.
      if (
        action.type === USER_LOGOUT &&
        typeof window !== "undefined" &&
        !!window.sessionStorage
      ) {
        window.sessionStorage.clear();
      }

      return rootReducer(appState, action);
    };
  };

  const enhancers = [];
  const windowIfDefined =
    typeof window === "undefined" ? null : (window as any);
  if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
  }

  return createStore(
    createReducer(),
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}
