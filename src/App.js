import { useEffect, useState } from 'react';
import { Box, Container, FormControl, InputAdornment, Stack, Button } from '@mui/material';
import Header from './components/Header/Header';
import { OutputContainer, SplitterContainer, StyledInput, StyledLabel, StyledOutput } from './App.styles';

function App() {
  // Define variables
  const [initialCost, setInitialCost] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [tipAmount, setTipAmount] = useState('-');
  const [totalCost, setTotalCost] = useState('-');
  const [peopleCount, setPeopleCount] = useState(1);
  const [costPerPerson, setCostPerPerson] = useState('-');

  // Handle inputs for Initial Cost
  const handleInitialCostInput = event => {
    setInitialCost(Math.abs(Number(event.target.value)));
  };

  // Handle inputs for Tip Percentage
  const handleTipPercentageInput = event => {
    setTipPercentage(Math.abs(Number(event.target.value)));
  };

  // Handle inputs for ( - ) button
  const handleMinusPeople = event => {
    if (peopleCount > 1) {
      setPeopleCount(peopleCount - 1);
    }
  };

  // Handle inputs for ( + ) button
  const handlePlusPeople = event => {
    setPeopleCount(peopleCount + 1);
  };

  // Calculate Tip Amount & Total Cost
  const calculateOutputs = () => {
    if (initialCost > 0 && tipPercentage > 0) {
      setTipAmount((initialCost * tipPercentage) / 100);
      setTotalCost(initialCost + tipAmount);
      setCostPerPerson(totalCost / peopleCount);
    }
  };

  // Calculate outputs with any change of inputs
  useEffect(() => {
    calculateOutputs();
  });

  // Outputs
  const totalOutputs = [
    {
      output: 'Tip Amount:',
      result: tipAmount,
    },
    {
      output: 'Total Cost:',
      result: totalCost,
    },
  ];

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
          height: 600,
          bgcolor: '#ffffff',
          borderRadius: 3,
        }}
      >
        <Header />
        <Stack spacing={5} padding='20px' marginTop='20px'>
          {/* Inputs */}
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

          {/* Outputs */}
          {totalOutputs.map(output => {
            return (
              <OutputContainer>
                <StyledLabel>{output.output}</StyledLabel>
                <StyledOutput>
                  {isNaN(output.result) ? '' : `$ ${(Math.round(output.result * 100) / 100).toFixed(2)}`}
                </StyledOutput>
              </OutputContainer>
            );
          })}

          {/* Splitter */}
          <SplitterContainer spacing={1}>
            <Button variant='contained' color='inherit' disableRipple disableElevation onClick={handleMinusPeople}>
              -
            </Button>
            <StyledOutput>{peopleCount}</StyledOutput>
            <Button variant='contained' color='inherit' disableRipple disableElevation onClick={handlePlusPeople}>
              +
            </Button>
          </SplitterContainer>
          <OutputContainer>
            <StyledLabel>Cost per Person:</StyledLabel>
            <StyledOutput>
              {isNaN(costPerPerson) ? '' : `$ ${(Math.round(costPerPerson * 100) / 100).toFixed(2)}`}
            </StyledOutput>
          </OutputContainer>
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
