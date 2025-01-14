import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

interface Props {
  dayName: string,
  dayData: string,
  time: string,
  onClose: () => void,
}

export default function ForecastDetailModal(props: Props){
  const { dayName, dayData, time, onClose } = props;
  let tod = "";

  if (time === "night") {
    tod = "Evening";
  }

  return (
    <Dialog open>
      <DialogTitle>Detailed Forecast for {dayName} {tod}</DialogTitle>
      <DialogContent>
        <DialogContentText>{dayData}</DialogContentText>
        <Button onClick={onClose}>Close</Button>
      </DialogContent>
    </Dialog>
  )
}