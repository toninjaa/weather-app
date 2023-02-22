import * as React from 'react';
import { TextField } from '@material-ui/core';

const LongMask = (props: any) => {
  const { onChange, ...otherProps } = props;

  const applyMask = (e: React.SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();

    let input = e.currentTarget.value.toString();
    input = input.replace(/[^0-9]/g, '');
    input = input.substring(0, 7);

    switch (input.length) {
      case 0:
        input = input
        break;
      case 1:
      case 2: 
        input = `${input.substring(0,3)}.`
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        input = `${input.substring(0,2)}.${input.substring(2,6)}`
        break;
      case 7:
        input = `${input.substring(0,3)}.${input.substring(3,7)}`
        break;
      default:
        input = input
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

export default LongMask;