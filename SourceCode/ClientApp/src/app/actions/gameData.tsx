import { createAction } from "redux-actions";
import Types from "./actionTypes";
import { setSeedPosition } from "../utils/moveSeed";

function setColours(data: any) {
  return createAction(Types.SET_COLOURS)(data);
}

export function setHouseColours(colours: any) {
  return setColours(colours);
}

export function moveSeed(data: any) {
  return createAction(Types.MOVE_SEED_TO_POSITION)(data);
}

export function moveSeedToPosition(seed: any, position: any, cb: any) {
  return (dispatch: any) => {
    setSeedPosition({ dispatch, seed, position, cb });
  };
}

function disableInactiveSeed(data: any) {
  return createAction(Types.DISABLE_INACTIVE_HOUSE_SEEDS)(data);
}

export function disableInactiveHouseSeed(activeHouse: any) {
  return disableInactiveSeed(activeHouse);
}

function setDieCastComplete() {
  return createAction(Types.DIE_CAST_COMPLETE)();
}
export function dieCastComplete() {
  return setDieCastComplete();
}

function selectedSeed(data: any) {
  return createAction(Types.SET_SELECTED_SEED)(data);
}

export function setSelectedSeed(id: any) {
  return selectedSeed(id);
}

function removeNotification(data: any) {
  return createAction(Types.REMOVE_NOTIFICATION)(data);
}

export function clearNotification(data: any) {
  return removeNotification(data);
}

function createNotification(data: any) {
  return createAction(Types.CREATE_NOTIFICATION)(data);
}

export function sendNotification(data: any) {
  return createNotification(data);
}

function changeTurnAction() {
  return createAction(Types.CHANGE_TURN)();
}

export function changeTurn() {
  return changeTurnAction();
}

function numberOfPlayers(data: any) {
  return createAction(Types.NUMBER_OF_PLAYERS)(data);
}
function numberOfPlayersUpdated() {
  return createAction(Types.NUMBER_OF_PLAYERS_UPDATED)();
}
export function setNumberOfPlayers(data: any) {
  return async (dispatch: any) => {
    await dispatch(numberOfPlayers(data));
    return dispatch(numberOfPlayersUpdated());
  };
}

function setDisabledHouse(data: any) {
  return createAction(Types.SET_DISABLED_HOUSES)(data);
}
function setDisabledHousesComplete() {
  return createAction(Types.SET_DISABLED_HOUSES_COMPLETE)();
}
export function setDisabled(data: any) {
  return async (dispatch: any) => {
    await dispatch(setDisabledHouse(data));
    return dispatch(setDisabledHousesComplete());
  };
}

export function removePlayerFromList(player: any) {
  return createAction(Types.MOVE_SEED_TO_POSITION)(player);
}

function resultToGlobalState(data: any) {
  return createAction(Types.SET_RESULT_TO_GLOBAL)(data);
}

export function setResultToGlobalState(data: any) {
  return resultToGlobalState(data);
}

function resetGameData(data: any) {
  return createAction(Types.RESET_GAME_DATA)(data);
}

export function gameDataReset(data: any) {
  return resetGameData(data);
}
