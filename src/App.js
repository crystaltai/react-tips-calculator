import { Box, Container, Grid } from '@mui/material';
import Header from './components/Header/Header';
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
          bgcolor: '#ffffff',
          borderRadius: 3,
        }}
      >
        <Header />
        <Grid container spacing={0} direction='column'>
          <Grid item>test</Grid>
          <Grid item>test</Grid>
        </Grid>
        {/* <Stack spacing={2}>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </Stack> */}
      </Box>
    </Container>
  );
}

export default App;
