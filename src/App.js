import { Box, Container, Stack } from '@mui/material';
import './App.css';

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
          padding: '20px',
          bgcolor: '#ffffff',
          borderRadius: 3,
        }}
      >
        <Stack spacing={2}>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
