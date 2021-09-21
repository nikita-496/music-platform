import { ITrack } from './../../../types/tracks';
import { PlayerAction, PlayerActionType } from "../../../types/player";

export const toPrevTrack = (payload: ITrack): PlayerAction => {
  return {type: PlayerActionType.PREVTRACK, payload}
}

export const playTrack = (): PlayerAction => {
  return {type: PlayerActionType.PLAY}
}

export const pauseTrack = (): PlayerAction => {
  return {type: PlayerActionType.PAUSE}
}

export const toNextTrack = (payload: ITrack): PlayerAction => {
  return {type: PlayerActionType.NEXTTRACK, payload}
}

export const setActive = (payload: ITrack): PlayerAction => {
  return {type: PlayerActionType.SET_ACTIVE, payload}
}

export const setCurrentDuration = (payload: number): PlayerAction => {
  return {type: PlayerActionType.SET_CURRENT_DURATION, payload}
}

export const setFullDuration = (payload: number): PlayerAction => {
  return {type: PlayerActionType.SET_FULL_DURATION, payload}
}

export const setVolume = (payload: number): PlayerAction => {
  return {type: PlayerActionType.SET_VOLUME, payload}
} 