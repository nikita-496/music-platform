import * as React from 'react';
import styles from "../styles/Player.module.scss"

interface TrackProgressProps {
  isValume: boolean;
  currentDuration: string;
  fullDuration: string;
  onChange: (e) => void
}
 
const TrackProgress: React.FC<TrackProgressProps> = ({
  currentDuration, fullDuration, onChange, isValume
}) => {
  return (
    <>
      {isValume 
      ? <div className={styles.progressValue}>
        <input type="range" style={{width:"10em"}}/>
      </div>

      : <div className={styles.progress}>
          <time className={styles.daurationInfo}>{currentDuration}</time>
          <input type="range" style={{margin:"0 1em", width:"45em"}}/>
          <time className={styles.daurationInfo}>{fullDuration}</time>
      </div>
      }
     
    </>
  )
}
 
export default TrackProgress;