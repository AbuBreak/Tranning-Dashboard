import CustomAppBar from "../components/app-bar";
import { Box, Typography, Container, TextField, Button } from '@mui/material';
import CusotmRadioButton from "../components/radio-group";
import Footer from "../components/footer";
import SelectField from "../components/select-field";

const CustomSignUpPage = () => {
    return (
        <>
            <CustomAppBar data={{
                title: 'CourseEase',
                mail: false,
                notifications: false,
                mailCount: 0,
                notificationCount: 0
            }} />

            <Container
                maxWidth="xs"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: '100vh',
                    justifyContent: 'center'
                }}
            >
                <Typography variant="h5" textAlign="center" sx={{ mb: 3 }}>
                    Can't wait to get started? Sign up now!
                </Typography>
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
                        Sign Up
                    </Typography>

                    <CusotmRadioButton />
                    <TextField
                        fullWidth
                        label="first name"
                        variant="outlined"
                        margin="normal"
                    />

                    <TextField
                        fullWidth
                        label="last name"
                        variant="outlined"
                        margin="normal"
                    />

                    <TextField
                        fullWidth
                        label="email"
                        variant="outlined"
                        margin="normal"
                    />

                    <SelectField />

                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        type="password"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="confirm password"
                        variant="outlined"
                        type="password"
                        margin="normal"
                    />
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Already have an account? <a href="/">Sign In</a>
                    </Typography>

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                    >
                        Register
                    </Button>
                    <hr />

                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        sx={{ mt: 2 }}
                    >
                        Sign Up with Google
                    </Button>

                </Box>
            </Container>
            <Footer />
        </>

    )
}

export default CustomSignUpPage;