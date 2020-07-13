import * as React from 'react';
import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';

interface Props {
  msg: string,
}

export default function LoaderModal(props: Props) {
  const { msg } = props;
  return (
    <>
      <Dialog open>
        <DialogContent>
          <DialogContentText>
            {msg}
            <CircularProgress />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}
