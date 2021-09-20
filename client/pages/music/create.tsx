import * as React from 'react';
import CoverLoading from '../../components/create/CoverLoading';
import TrackInformation from '../../components/create/TrackInformation';
import TrackLoading from '../../components/create/TrackLoadimg';
import MainLayout from '../../components/MainLayout'
import StepWrapper from '../../components/StepWrapper';

interface CreateProps {
  
}

const Create: React.FC<CreateProps> = () => {

  const [stepCount, setStepCount] = React.useState(0)
  const [picture, setPicture] = React.useState(null)
  const [audio, audioPicture] = React.useState(null)

  const decrementStep = (step: number)  => setStepCount(--step)
  const incrementStep = (step: number) => setStepCount(++step)

  let currentContent
  
  if (stepCount === 0) {
    currentContent = <TrackInformation/>
  }else if (stepCount === 1) {
    currentContent = <CoverLoading setFile={setPicture}/>
  }else {
    currentContent = <TrackLoading setFile={audioPicture}/>
  }

  return (
    <MainLayout home={false}>  
      <StepWrapper 
          activeStep={stepCount} 
          decrementStep={decrementStep}
          incrementStep={incrementStep}
      >
        {currentContent}
      </StepWrapper>
    </MainLayout>
  );
}
 
export default Create;
