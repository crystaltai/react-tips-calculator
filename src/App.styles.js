import { styled } from '@mui/system';
import { InputLabel, Typography } from '@mui/material';

const StyledLabels = styled(InputLabel)({
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1rem',
  color: '#2c3e50',
});

const StyledOutput = styled(Typography)({
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1rem',
  color: '#2c3e50',
});

const OutputContainer = styled('div')({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
});

export { OutputContainer, StyledLabels, StyledOutput };
