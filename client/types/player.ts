import { ITrack } from './tracks';

//типизация состояния player
 interface PlayerControl {
  prevTrack: null | ITrack;
  pause: boolean;
  nextTrack: null | ITrack;
}

 interface Progress {
  currentDuration: number;
  fullDuration: number;
}

export interface PlayerState {
  playerControl: PlayerControl;
  active: null | ITrack;
  progress: Progress;
  volume: number;
}

//Перечисление всех типов action доступных для cостояния player
export enum PlayerActionType {
  PREVTRACK = "player/prevTrack",
  PLAY = "player/play",
  PAUSE = "player/pause",
  NEXTTRACK = "player/nextTrack",
  SET_ACTIVE = "player/setActive",
  SET_CURRENT_DURATION = "player/setCurrentDuration",
  SET_FULL_DURATION = "player/setFullDuration",
  SET_VOLUME = "player/setVolume"
}

//Описание каждого action 
interface PrevTrackAction {
  type: PlayerActionType.PREVTRACK,
  payload: ITrack
}

interface PlayAction {
  type: PlayerActionType.PLAY,
}

interface PasueAtion {
  type: PlayerActionType.PAUSE,
}

interface NextTrackAction {
  type: PlayerActionType.NEXTTRACK,
  payload: ITrack
}

interface SetActiveAction {
  type: PlayerActionType.SET_ACTIVE,
  payload: ITrack
}

interface SetCurrentDurationAction {
  type: PlayerActionType.SET_CURRENT_DURATION,
  payload: number
}

interface SetFullDurationActive {
  type: PlayerActionType.SET_FULL_DURATION,
  payload: number
}

interface SetVolumeAction {
  type: PlayerActionType.SET_VOLUME,
  payload: number
}

//Возможные интерфейсы типов для action (типы которые может принимать action)
export type PlayerAction = 
PrevTrackAction
| PlayAction
| PasueAtion
| NextTrackAction
| SetActiveAction
| SetCurrentDurationAction
| SetFullDurationActive
| SetVolumeAction

