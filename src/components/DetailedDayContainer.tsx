import * as React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  dayName: string,
  dayData: string,
  time: string,
  onClose: () => void,
}

export default function DetailedDayContainer(props: Props){
  const { dayName, dayData, time, onClose } = props;
  let tod = "";

  if (time === "night") {
    tod = "Evening";
  }

  return (
    <>
      <div className="Detail-modal-background">
        <div className="Detail-modal">
          <h1>Detailed Forecast for {dayName} {tod}</h1>
          <p>{dayData}</p>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </>
  )
}