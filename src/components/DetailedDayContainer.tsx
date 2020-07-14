import * as React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  dayData: any,
  onClose: () => void,
}

export default function DetailedDayContainer(props: Props){
  const { dayData, onClose } = props;


  return (
    <>
      <h1>Detailed Day Beta</h1>
      <p>{dayData.detailedForecast}</p>
      
      <Button onClick={onClose}>Close</Button>
    </>
  )
}