import * as React from 'react';
import { TextField } from '@material-ui/core';

const NumMask = (props: any) => {
  const { onChange, ...otherProps } = props;

  const applyMask = (e: React.SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();

    let input = e.currentTarget.value.toString();
    input = input.replace(/[^0-9]/g, '');
    input = input.substring(0, 6);

    switch (input.length) {
      case 0:
        input = input;
        break;
      case 1:
      case 2:
      case 3:        
        input = `${input.substring(0,2)}.${input.substring(2,7)}`;
        break;
      case 4:
      case 5:
      case 6:
      case 7:
        input = `${input.substring(0,2)}.${input.substring(2,7)}`;
        break;
      default:
        input = input;
    }

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

export default NumMask;