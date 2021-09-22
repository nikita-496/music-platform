import * as React from 'react';
import styles from "../styles/Player.module.scss"

const covertToMinute = (timeStamp: number): string => {
  if (timeStamp % 60 < 10) {
    return (Math.floor(timeStamp / 60) + ':0' + timeStamp % 60)
  } else {
    return (Math.floor(timeStamp / 60) + ':' + timeStamp % 60);
  }
}

interface TrackProgressProps {
  isVolume: boolean;
  valueVolume?: number;
  currentDuration?: number;
  fullDuration?: number;
  onChange: (e) => void
}
 
const TrackProgress: React.FC<TrackProgressProps> = ({
  isVolume, valueVolume, currentDuration, fullDuration, onChange, 
}) => {
  return (
    <>
      {isVolume 
      ? <div className={styles.progressVolume}>
        <input type="range" value={valueVolume} onChange={onChange} style={{width:"10em"}}/>
        <span className={styles.valueVolume}>{valueVolume}</span>
      </div>

      : <div className={styles.progress}>
          <time className={styles.daurationInfo}>{covertToMinute(currentDuration)}</time>
          <input 
                type="range" 
                min={0}
                max={fullDuration}
                value={currentDuration} 
                onChange={onChange} 
                style={{margin:"0 1em", width:"45em"}}
          />
          <time className={styles.daurationInfo}>{covertToMinute(fullDuration)}</time>
      </div>
      }
     
    </>
  )
}
 
export default TrackProgress;