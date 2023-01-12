import { useState } from 'react';
import { Box, Container, FormControl, InputAdornment, InputLabel, OutlinedInput, Stack } from '@mui/material';
import Header from './components/Header/Header';
import { OutputContainer, StyledLabels, StyledOutput } from './App.styles';

function App() {
  // Define variables
  const [initialCost, setInitialCost] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  let tipAmount = initialCost * tipPercentage;
  let totalCost = initialCost + tipAmount;

  // Handle inputs for Initial Cost
  const handleInitialCostInput = event => {
    setInitialCost(Number(event.target.value));
  };

  // Handle inputs for Tip Percentage
  const handleTipPercentageInput = event => {
    setTipPercentage(Number(event.target.value));
  };

  console.log({ initialCost, tipPercentage });

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
              onChange={handleInitialCostInput}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='tip-percentage'>Tip Percentage</InputLabel>
            <OutlinedInput
              id='tip-percentage'
              startAdornment={<InputAdornment position='start'>%</InputAdornment>}
              label='Tip Percentage'
              type='number'
              onChange={handleTipPercentageInput}
            />
          </FormControl>

          <OutputContainer>
            <StyledLabels>Tip Amount:</StyledLabels>
            <StyledOutput>X</StyledOutput>
          </OutputContainer>
          <OutputContainer>
            <StyledLabels>Total Cost</StyledLabels>
            <StyledOutput>X</StyledOutput>
          </OutputContainer>
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
