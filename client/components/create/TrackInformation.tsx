import * as React from 'react';
import { Box, TextField, Typography  } from '@material-ui/core';
import styles from '../../styles/create/Create.module.scss'


const TrackInformation = () => {
  return (
    <>
      <Typography className={styles.title} variant="h5" align="center"> Введите информацию о треке </Typography>
      <Box className={styles.fieldWrapper} display="flex" flexDirection="column" alignItems="center">
        <TextField
            className={styles.field}
            label={"Введите название трека"}
            variant="outlined"
        />
        <TextField
            className={styles.field}
            label={"Введите имя автора"}
            variant="outlined"
        /> 
        <TextField
            className={styles.field}
            label={"Введите текст песни"}
            variant="outlined"
        />
      </Box>
    </>
  );
}
 
export default TrackInformation;