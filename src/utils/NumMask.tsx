import * as React from 'react';
import { TextField } from '@material-ui/core';

export const NumMask = (props: any) => {
  const { onChange, ...otherProps } = props;

  const applyMask = (e: React.SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();

    let input = e.currentTarget.value.toString();
    input = input.replace(/-{0,1}[0-9]{2,3}\.[0-9]{10}/g, '');
    input = input.substring(0, 9);

    e.currentTarget.value = input;

    onChange(e);
  };

  return (
    <TextField
      {...otherProps}
      onChange={applyMask}
    />
  );
};
