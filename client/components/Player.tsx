import { Grid, IconButton } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import * as React from 'react';
import styles from "../styles/Player.module.scss"
import { ITrack } from '../types/tracks';
import TrackProgress from './TrackProgress';
import { VolumeUp } from '@material-ui/icons';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useAction';


interface PlayerProps {
  maxVolume: number;
  currentVolume: number;
}

let audio

const Player: React.FC <PlayerProps> = () => {

  const track: ITrack = {
    _id: "1", name: "Трек 1", artist: "Исполнитель 1", 
  text:"Слова к треку", listening: 5, picture:"http://placehold.jp/50x50.png", audio:"http://localhost:5000/audio/93c2995d-4252-4d2d-9911-f9efc919f125.mp3", comments: []
}
  const {prevTrack, pause, nextTrack} = useTypeSelector (state => state.player.playerControl)
  const {currentDuration, fullDuration} = useTypeSelector (state => state.player.progress)
  const {volume} = useTypeSelector (state => state.player)
  const {pauseTrack, playTrack, setVolume, setCurrentDuration, setFullDuration} = useActions()

  React.useEffect(()=> {
    if(!audio) {
      audio = new Audio()
      audio.src = track.audio
      audio.volume = volume / 100
      //информация о длительности трека 
      audio.onloadedmetadata = () => {
        setFullDuration( Math.ceil(audio.duration) )
      }
      //данные текущего времени произведения трека. В процессе проигрывания трека, данный колбэк постоянно вызывается
      audio.ontimeupdate = () => {
        setCurrentDuration( Math.ceil(audio.currentTime) )
      }
    }
  }, [])

  const setAudio = () => {
    
  }

  const play = () => {
    if (pause) {
      playTrack()
      audio.play()
    } else {
      pauseTrack()
      audio.pause()
    }
  }

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value)
    audio.currentTime = value
    setCurrentDuration(value)
  }

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value)
    audio.volume = value / 100
    setVolume(value)
  }

  return (
    <div className={styles.player}>

      <img style={{paddingBottom:".4em"}}
          src="http://placehold.jp/50x50.png"
          alt={track.artist}
      />
      <Grid container direction="column" style={{marginLeft:"1em", width:"10em"}}>
        <p style={{marginBottom:".5em", color:"#fff"}}>{track.name}</p>
        <p style={{color:"#fff"}}>{track.artist}</p>
      </Grid>

      <IconButton className={styles.playerButton} onClick={play}>
        <SkipPreviousIcon className={styles.playerControl}/>
      </IconButton>
        <IconButton className={styles.playerButton} onClick={play}>
          {pause 
            ?
            <PlayCircleOutlineIcon className={styles.playerControl}/>
            : <PauseCircleOutlineIcon className={styles.playerControl}/>
          }
    
        </IconButton>
      <IconButton className={styles.playerButton}>
          <SkipNextIcon className={styles.playerControl}/>
      </IconButton>
      <TrackProgress 
          isVolume={false} 
          currentDuration={currentDuration} 
          fullDuration={fullDuration} 
          onChange={changeCurrentTime}
      />
      <VolumeUp style={{marginLeft:"auto", color:"#fff"}}/>
      <TrackProgress 
          isVolume={true}
          valueVolume={volume}
          onChange={changeVolume}
      />
    </div>
  );
}
 
export default Player;