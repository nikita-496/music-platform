import * as React from 'react';
import { Button, Typography  } from '@material-ui/core';
import styles from '../../styles/create/Create.module.scss';
import FileUpLoad from '../FileUpLoad';

interface CoverLoadingProps {
  setFile: Function;
}

const CoverLoading: React.FC<CoverLoadingProps> = ({setFile}) => {
  return (
    <>
      <Typography className={styles.title} variant="h5" align="center"> Загрузка обложки трека </Typography>
      <FileUpLoad setFile={setFile} accept="image/*">
        <Button style={{display:"block", margin: "0 auto", marginBottom:"2em"}}>Загрузить</Button>
      </FileUpLoad>
    </>
  );
}
 
export default CoverLoading;