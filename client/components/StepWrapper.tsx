import { Box, Button, Card, Container, Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';
import styles from './StepWrapp.module.scss'

interface StepWrapperProps {
  activeStep: number;
  decrementStep: (step: number) => void;
  incrementStep: (step: number) => void;
}
 const steps = ["Информация о треке", "Загрузка обложки", "Загрузка трека"]

const StepWrapper: React.FC<StepWrapperProps> = ({activeStep, decrementStep, incrementStep,children}) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
          {
            steps.map((step,index) => 
               <Step
                key={index}
                completed={activeStep > index}
               >
                <StepLabel>
                  {step}
                </StepLabel>
              </Step>
              )
          }
      </Stepper>
      <Grid 
          className={styles.stepInfo}
          container
          direction="column"
          alignItems="center"
      >
          <Card className={styles.stepInfoCard}>
            {children}
          </Card>
          <Box className={styles.btn} display="flex" justifyContent="space-between">
            <Button className={styles.btnPrev} disabled={activeStep === 0} onClick={() => decrementStep(activeStep)}>Назад</Button>
            <Button className={styles.btnNext} disabled={activeStep === 2} onClick={() => incrementStep(activeStep)}>Вперед</Button>
          </Box>
      </Grid>
    </Container>
  );
}
 
export default StepWrapper;