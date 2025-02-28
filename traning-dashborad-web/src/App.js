import * as React from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';

import CustomAppBar from './components/app-bar';

/**
 * Main entry point of the React application.
 * Includes a navbar, a brief description, and a sign-in form.
 *
 * @return {JSX.Element} The JSX representation of the App component.
 */

{/* TODO add logo, simple image and add animation for them with the description below. */ }

{/* TODO start working with sign up page */}

function App() {

  return (
    <>
      <CustomAppBar />

      {/* Main Container, which will contain page content */}
      <Container
        maxWidth="xs"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '90vh',
          justifyContent: 'center'
        }}
      >
        {/* Brief Description*/}
        <Typography variant="h5" textAlign="center" sx={{ mb: 3 }}>
          Welcome to CourseEase – The Ultimate Course Management Platform!
        </Typography>

        {/* TODO do cusotm components for each element. */}

        {/* Sign-In Card, which have the main entires required from the user as username | password OR signup if not registered. */}

        <Box
          sx={{
            p: 3,
            boxShadow: 3,
            borderRadius: 2,
            bgcolor: 'background.paper',
            width: '100%',
            textAlign: 'center'
          }}
        >
          <Typography variant="h4" gutterBottom>
            Sign In
          </Typography>

          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            margin="normal"
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Container>
      {/* TODO add footer as a custom for whole project. */}

    </>
  );
}

export default App;