import * as React from 'react';
import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';

interface Props {
  msg: string,
  open: boolean,
}

export default function LoaderModal(props: Props) {
  const { msg, open } = props;
  return (
    <>
      <Dialog open={open}>
        <DialogContent>
          <DialogContentText>
            {msg}
            <CircularProgress size={20} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}
