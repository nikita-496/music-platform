import * as React from 'react';
import { Typography, Button  } from '@material-ui/core';
import styles from '../../styles/create/Create.module.scss';
import FileUpLoad from '../FileUpLoad';

interface TrackLoadingProps {
  setFile: Function;
}
 
const TrackLoading: React.FC <TrackLoadingProps> = ({setFile}) => {
  return (
    <>
      <Typography className={styles.title} variant="h5" align="center"> Загрузка нового трека </Typography>
      <FileUpLoad setFile={setFile} accept="audio/*">
      <Button style={{display:"block", margin: "0 auto", marginBottom:"2em"}}>Загрузить</Button>
      </FileUpLoad>
    </>

  );
}
 
export default TrackLoading;