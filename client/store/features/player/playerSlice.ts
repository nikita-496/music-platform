import { PlayerState, PlayerAction, PlayerActionType } from '../../../types/player';

const initialState: PlayerState = {
  playerControl: {
    prevTrack: null,
    pause: true,
    nextTrack: null
  },
  active: null,
  progress: {
    currentDuration: 0,
    fullDuration: 0
  },
  volume: 50
}

export default function playerReducer (state: PlayerState = initialState, action: PlayerAction): PlayerState {
  switch (action.type) {
    case PlayerActionType.PREVTRACK: 
      return {
        //поверхностное копирование (копирование примитивов)
        ...state, 
        //глубокое копирование (копирование ссылочных типов)
        playerControl: {
          ...state.playerControl,
          prevTrack: action.payload
        }
      }
      
    case PlayerActionType.PLAY:
      return {
        ...state, playerControl: {...state.playerControl, pause: false}
      }

    case PlayerActionType.PAUSE:
      return {
        ...state, playerControl: {...state.playerControl, pause: true}
      }

    case PlayerActionType.NEXTTRACK:
      return {
        ...state, playerControl: {...state.playerControl, nextTrack: action.payload}
      }

    case PlayerActionType.SET_ACTIVE:
      return {
        ...state,
        active: action.payload,
        progress: {...state.progress, currentDuration: 0, fullDuration: 0}
      }  

    case PlayerActionType.SET_CURRENT_DURATION:
      return {
        ...state, progress: {...state.progress, currentDuration: action.payload}
      }

    case PlayerActionType.SET_FULL_DURATION:
      return {
        ...state, progress: {...state.progress, fullDuration: action.payload}
      }

    case PlayerActionType.SET_VOLUME:
      return {
        ...state, volume: action.payload
      }

    default:
      return state
  }
}