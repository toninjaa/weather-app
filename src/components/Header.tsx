import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
} from '@mui/material';
import { Search } from '@mui/icons-material';

export default function Header() {
  return (
    <>
      <AppBar sx={{
        backgroundColor: '#282c34',
        justifyContent: 'space-between'
      }}>
        <Toolbar>
          <Typography>
            Weather Forecast
          </Typography>
          <div style={{
            position: 'relative',
            marginRight: 0,
            marginLeft: 'auto'
          }}>
            <InputBase 
              placeholder="Coming eventually..."
              startAdornment={<Search />}
              sx={{ color: '#fff' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}