import React from 'react';
import { ITrack } from '../../types/tracks';
import { Box, Grid, IconButton} from '@material-ui/core';
import styles from "../../styles/TrackItem.module.scss"
import { Pause, PlayArrow } from '@material-ui/icons';
import { useActions } from '../../hooks/useAction';
interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}
 
const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {

  const {playTrack, setActive} = useActions()

  const play = (e) => {
    e.stopPropagation()
    setActive(track)
    playTrack()
  }
  return (
      <li> 
        <Box borderBottom={1} borderColor="red" style={{marginBottom: "2em"}}>
          <Box 
              display="flex" 
              justifyContent="space-between" 
              alignItems="center"
              style={{paddingBottom: "1em"}}
          >
        
            <Box className={styles.trackInfo}>
                <IconButton onClick={play}>
                  {active ? <Pause/> : <PlayArrow/>}
                </IconButton>
                <img style={{paddingBottom:".4em"}}
                  src="http://placehold.jp/50x50.png"
                  alt={track.artist}
                />
                <Grid container direction="column" style={{marginLeft:"1em"}}>
                  <p style={{marginBottom:"1em"}}>{track.name}</p>
                  <p>{track.artist}</p>
                </Grid>
            </Box>
            <Box>
              <time>5:10</time>
            </Box>
          </Box>
        </Box>
      </li>
  );
}
 
export default TrackItem;
