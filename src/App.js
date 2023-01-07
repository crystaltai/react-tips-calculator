import { Box, Container, FormControl, InputAdornment, InputLabel, OutlinedInput, Stack } from '@mui/material';
import Header from './components/Header/Header';
import { StyledLabels } from './App.styles';

function App() {
  return (
    <Container
      maxWidth='md'
      sx={{
        bgcolor: '#E5E9F0',
        height: '100vh',
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          minWidth: 400,
          height: 700,
          bgcolor: '#ffffff',
          borderRadius: 3,
        }}
      >
        <Header />
        <Stack spacing={3} padding='20px'>
          <FormControl>
            <InputLabel htmlFor='initial-cost'>Initial Cost</InputLabel>
            <OutlinedInput
              id='initial-cost'
              startAdornment={<InputAdornment position='start'>$</InputAdornment>}
              label='Initial Cost'
              type='number'
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='tip-percentage'>Tip Percentage</InputLabel>
            <OutlinedInput
              id='tip-percentage'
              startAdornment={<InputAdornment position='start'>%</InputAdornment>}
              label='Tip Percentage'
              type='number'
            />
          </FormControl>

          <StyledLabels>Tip Amount:</StyledLabels>
          <StyledLabels>Total Cost:</StyledLabels>
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
