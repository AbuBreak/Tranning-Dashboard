import * as React from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';
import CustomAppBar from '../components/app-bar';
import Footer from '../components/footer';

/**
 * Login Page contains the sign-in form.
 * 
 *
 * @return {JSX.Element} The JSX representation of the App component.
 */

const CustomLoginPage = () => {
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

                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Don't have an account? <a href="/signup">Sign Up</a>
                    </Typography>

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                    >
                        Sign In
                    </Button>
                    <hr />

                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        sx={{ mt: 2 }}
                    >
                        Sign In with Google
                    </Button>

                </Box>
            </Container>

            <Footer />

        </>
    );
}

export default CustomLoginPage;