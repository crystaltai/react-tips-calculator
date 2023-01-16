import { styled } from '@mui/system';
import { Input, InputLabel, Grid, Typography } from '@mui/material';

const StyledLabel = styled(InputLabel)({
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.1rem',
  color: '#2c3e50',
});

const StyledInput = styled(Input)({
  fontWeight: 700,
  letterSpacing: '0.1rem',
  color: '#2c3e50',
});

const StyledOutput = styled(Typography)({
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1rem',
  color: '#2c3e50',
});

const OutputContainer = styled('div')({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const SplitterContainer = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  justifyContent: 'center',
});

export { OutputContainer, SplitterContainer, StyledInput, StyledLabel, StyledOutput };
