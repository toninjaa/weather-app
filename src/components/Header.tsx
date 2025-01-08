import { MutableRefObject } from 'react';
import {
  AppBar,
  FormControl,
  InputLabel,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Search } from '@mui/icons-material';
import { State, States } from '../types/States';

interface Props {
  state: State,
  handleSelect: (event: SelectChangeEvent) => void,
}

export default function Header(props: Props) {
  const { state, handleSelect } = props;
  const theme = useTheme();

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: theme.palette.primary.main,
          justifyContent: 'space-between',
        }}>
        <Toolbar>
          <Typography variant='h4'>
            7 Day Forecast for {state.Name || 'New York'}
          </Typography>

          <FormControl
            sx={{
              color: 'white',
              position: 'relative',
              marginRight: 0,
              marginLeft: 'auto',
              width: '10em'
            }}>
            <InputLabel sx={{ color: 'white' }}>Search<Search /></InputLabel>
            <Select
              value={state.Name || ''}
              label="Location"
              onChange={handleSelect}
              sx={{ color: 'white' }}
            >
              {States.map((s, i) => (
                <MenuItem key={i} value={s.Name}>{s.Name}</MenuItem>
              ))}
            </Select>
          </FormControl>

        </Toolbar>
      </AppBar>
    </>
  )
}