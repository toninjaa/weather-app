import * as React from 'react';
import {
  AppBar,
  // InputAdornment,
  // InputBase,
  TextField,
  Toolbar,
  Typography,
  makeStyles,
} from '@material-ui/core';
// import { Search } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: '#282c34',
    // display: 'grid',
    justifyContent: 'space-between',
    // alignItems: 'space-between',
  },
  // searchBar: {
  //   posiiton: 'relative',
  //   marginRight: 0,
  //   marginLeft: 'auto',
  // },
  inputs: {
    // display: 'grid',
    posiiton: 'relative',
    marginRight: 0,
    marginLeft: 'auto',
    color: '#fff',
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

          <div className={classes.inputs}>
            <form>
              <TextField id="latitude" label="latitude" variant="outlined"/>
              <TextField id="longitude" label="longitude" variant="outlined" />
            </form>
          </div>
          {/* <div className={classes.searchBar}>
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
          </div> */}
        </Toolbar>
      </AppBar>
    </>
  )
}