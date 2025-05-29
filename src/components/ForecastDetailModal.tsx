import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

interface Props {
  dayName: string,
  dayData: string,
  onClose: () => void,
  open: boolean,
}

export default function ForecastDetailModal(props: Props){
  const {
    dayName,
    dayData,
    onClose,
    open
  } = props;

  return (
    <Dialog open={open}>
      <DialogTitle>Detailed Forecast for {dayName}</DialogTitle>
      <DialogContent>
        <DialogContentText>{dayData}</DialogContentText>
        <DialogActions>
          <Button onClick={onClose} variant='contained'>Close</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}