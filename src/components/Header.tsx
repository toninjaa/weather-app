import * as React from 'react';
import {
  AppBar,
  InputAdornment,
  InputBase,
  Toolbar,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: '#282c34',
    justifyContent: 'space-between',
  },
  searchBar: {
    posiiton: 'relative',
    marginRight: 0,
    marginLeft: 'auto',
  },
  search: {
    color: '#fff',
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography>
            Weather Forecast
          </Typography>
          <div className={classes.searchBar}>
            <Search />
            <InputBase
              className={classes.search} 
              placeholder="Search..."
              inputProps={{
                startAdornment: <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}