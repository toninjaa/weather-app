import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';

interface Props {
  open: boolean,
  msg: string,
  handleClose: () => void,
}

export default function ErrorModal(props: Props) {
  const { open, msg, handleClose } = props;
  return (
    <>
      <Dialog open={open}>
        <DialogTitle>
          Unexpected Error
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
