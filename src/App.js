import { useEffect, useState } from 'react';
import { Box, Container, FormControl, Input, InputAdornment, Stack } from '@mui/material';
import Header from './components/Header/Header';
import { OutputContainer, StyledInput, StyledLabel, StyledOutput } from './App.styles';

function App() {
  // Define variables
  const [initialCost, setInitialCost] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [tipAmount, setTipAmount] = useState('-');
  const [totalCost, setTotalCost] = useState('-');

  // Handle inputs for Initial Cost
  const handleInitialCostInput = event => {
    setInitialCost(Number(event.target.value));
  };

  // Handle inputs for Tip Percentage
  const handleTipPercentageInput = event => {
    setTipPercentage(Number(event.target.value));
  };

  // Calculate Tip Amount & Total Cost
  const calculateOutputs = () => {
    if (initialCost > 0 && tipPercentage > 0) {
      setTipAmount((initialCost * tipPercentage) / 100);
      setTotalCost(initialCost + tipAmount);
    }
  };

  useEffect(() => {
    calculateOutputs();
  });

  return (
    <Container
      maxWidth='lg'
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
        <Stack spacing={5} padding='20px' marginTop='20px'>
          <FormControl>
            <StyledLabel htmlFor='initial-cost'>Initial Cost</StyledLabel>
            <StyledInput
              id='initial-cost'
              startAdornment={<InputAdornment position='start'>$</InputAdornment>}
              label='Initial Cost'
              type='number'
              onChange={handleInitialCostInput}
            />
          </FormControl>
          <FormControl>
            <StyledLabel htmlFor='initial-cost'>Tip Percentage</StyledLabel>
            <StyledInput
              id='tip-percentage'
              startAdornment={<InputAdornment position='start'>%</InputAdornment>}
              label='Tip Percentage'
              type='number'
              onChange={handleTipPercentageInput}
            />
          </FormControl>

          <OutputContainer>
            <StyledLabel>Tip Amount:</StyledLabel>
            <StyledOutput>{isNaN(tipAmount) ? '' : `$ ${(Math.round(tipAmount * 100) / 100).toFixed(2)}`}</StyledOutput>
          </OutputContainer>
          <OutputContainer>
            <StyledLabel>Total Cost:</StyledLabel>
            <StyledOutput>{isNaN(totalCost) ? '' : `$ ${(Math.round(totalCost * 100) / 100).toFixed(2)}`}</StyledOutput>
          </OutputContainer>
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
