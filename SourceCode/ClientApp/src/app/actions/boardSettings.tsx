import { createAction } from "redux-actions";
import Types from "./actionTypes";

function setBoardSettings(data: any) {
  return createAction(Types.UPDATE_BOARD_SETTINGS)(data);
}

export function updateBoardSettings(data: any) {
  return (dispatch: any) => {
    dispatch(setBoardSettings(data));
  };
}
