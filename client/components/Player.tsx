import { Box, Grid, IconButton } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import * as React from 'react';
import styles from "../styles/Player.module.scss"
import { ITrack } from '../types/tracks';
import TrackProgress from './TrackProgress';
import { VolumeUp } from '@material-ui/icons';

interface PlayerProps {
  maxVolume: number;
  currentVolume: number;
}

const Player: React.FC <PlayerProps> = () => {

  const track: ITrack = {
    _id: "1", name: "Трек 1", artist: "Исполнитель 1", 
  text:"Слова к треку", listening: 5, picture:"http://placehold.jp/50x50.png", audio:"audio", comments: []
}

  const active = false
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

      <IconButton className={styles.playerButton}>
        <SkipPreviousIcon className={styles.playerControl}/>
      </IconButton>
      <IconButton className={styles.playerButton}>
          {active 
            ?
            <PlayCircleOutlineIcon className={styles.playerControl}/>
            : <PauseCircleOutlineIcon className={styles.playerControl}/>
          }
    
      </IconButton>
      <IconButton className={styles.playerButton}>
          <SkipNextIcon className={styles.playerControl}/>
      </IconButton>
      <TrackProgress 
          isValume={false} 
          currentDuration={"00:00"} 
          fullDuration={"05:10"} 
          onChange={()=>{}}
      />
      <VolumeUp style={{marginLeft:"auto", color:"#fff"}}/>
      <TrackProgress 
          isValume={true}
          currentDuration={"00:00"} 
          fullDuration={"05:32"} 
          onChange={()=>{}}
      />
    </div>
  );
}
 
export default Player;