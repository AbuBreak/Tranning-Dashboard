import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography, Container, Button } from '@mui/material';
import CusotmRadioButton from "../components/radio-group";
import CustomSelectField from "../components/select-field";
import CustomAppBar from '../components/shared-components/TDAppBars/app-bar';
import Footer from '../components/shared-components/TDAppBars/footer';
import CustomTextField from '../components/shared-components/TDTextFields/text-field';
import { signupValidationSchema } from "../utils/validations/validation";


const CustomSignUpPage = () => {

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(signupValidationSchema),
    });

    const onSubmit = (data) => {
        console.log("Signup Data:", data);
    };

    return (
        <>
            <CustomAppBar
                title='CourseEase'
                mail='false'
                notifications='false'
                mailCount='0'
                notificationCount='0'
            />

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
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Sign Up
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <CusotmRadioButton
                            value={watch("userType") || ""}
                            onChange={(e) => setValue("userType", e.target.value)}
                            error={errors.userType?.message}
                        />

                        <CustomTextField
                            fullWidth
                            type="text"
                            placeholder="Username"
                            variant="outlined"
                            {...register("username")}
                            error={errors.username}
                            helperText={errors.username?.message}
                        />
                        <CustomTextField
                            fullWidth
                            type="text"
                            placeholder="First Name"
                            variant="outlined"
                            textAlign="center"
                            margin='normal'
                            {...register("fName")}
                            error={errors.fName}
                            helperText={errors.fName?.message}

                        />

                        <CustomTextField
                            fullWidth
                            type="text"
                            placeholder="Last Name"
                            variant="outlined"
                            textAlign="center"
                            margin='normal'
                            {...register("lName")}
                            error={errors.lName}
                            helperText={errors.lName?.message}
                        />

                        <CustomTextField
                            fullWidth
                            type="email"
                            placeholder="Email"
                            variant="outlined"
                            textAlign="center"
                            margin='normal'
                            {...register("email")}
                            error={errors.email}
                            helperText={errors.email?.message}

                        />

                        <CustomSelectField
                            value={watch("job") || ""}
                            onChange={(e) => setValue("job", e.target.value)}
                            error={errors.job?.message}
                        />

                        <CustomTextField
                            fullWidth
                            type="password"
                            placeholder="Password"
                            variant="outlined"
                            textAlign="center"
                            margin='normal'
                            {...register("password")}
                            error={errors.password}
                            helperText={errors.password?.message}
                        />

                        <CustomTextField
                            fullWidth
                            type="password"
                            placeholder="Confirm Password"
                            variant="outlined"
                            textAlign="center"
                            margin='normal'
                            {...register("confirmPassword")}
                            error={errors.confirmPassword}
                            helperText={errors.confirmPassword?.message}

                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2 }}
                            type="submit"
                        >
                            Register
                        </Button>
                    </form>

                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Already have an account? <a href="/">Sign In</a>
                    </Typography>


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