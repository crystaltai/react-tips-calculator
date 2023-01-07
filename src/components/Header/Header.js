import React from 'react';
import { Box, Typography } from '@mui/material';

function Header() {
  return (
    <Box
      sx={{
        padding: '20px',
        bgcolor: '#8FBCBB',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
    >
      <Typography variant='h5' sx={{ color: 'white', fontWeight: 700 }}>
        Tips Calculator
      </Typography>
    </Box>
  );
}

export default Header;
