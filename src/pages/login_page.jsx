import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Container } from "@mui/material";
import CustomTextField from "../components/shared-components/TDTextFields/text-field";
import CustomAppBar from "../components/shared-components/TDAppBars/app-bar";
import Footer from "../components/shared-components/TDAppBars/footer";
import { loginValidationSchema } from "../utils/validations/validation";
import CustomButton from "../components/shared-components/TDButtons/custom-button";
import CustomTypography from "../components/shared-components/TDTypographies/custom-typography";

const CustomLoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginValidationSchema),
    });

    const onSubmit = (data) => {
        console.log("Login Data:", data);
    };

    return (
        <>
            <CustomAppBar
                title="CourseEase"
                mail="false"
                notifications="false"
                mailCount="0"
                notificationCount="0" />

            <Container
                maxWidth="xs"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minHeight: "100vh",
                    justifyContent: "center",
                }}
            >
                <CustomTypography
                    fontFamily="sans-serif"
                    fontSize='1rem'
                    color='text.primary'
                    variant="h5"
                    textAlign="center"
                    sx={{ mb: 3 }}>
                    Welcome to CourseEase – The Ultimate Course Management Platform!
                </CustomTypography>

                <Box
                    sx={{
                        p: 3,
                        boxShadow: 3,
                        borderRadius: 2,
                        bgcolor: "background.paper",
                        width: "100%",
                        textAlign: "center",
                    }}
                >
                    <CustomTypography
                        fontFamily="sans-serif"
                        fontSize='2rem'
                        color='text.primary'
                        variant="h5"
                        textAlign="center"
                        sx={{ mb: 3 }}>
                        Sign In
                    </CustomTypography>

                    <form onSubmit={handleSubmit(onSubmit)}>
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
                            type="password"
                            placeholder="Password"
                            variant="outlined"
                            {...register("password")}
                            error={errors.password}
                            helperText={errors.password?.message}
                            margin="normal"
                        />

                        <CustomTypography
                            fontFamily="sans-serif"
                            fontSize='1rem'
                            color='text.primary'
                            variant="h5"
                            textAlign="center"
                            sx={{ mt: 2 }}>
                            Don't have an account? <a href="/signup">Sign Up</a>
                        </CustomTypography>

                        <CustomButton
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2 }}
                            type="submit"
                            onClick={() => { alert('Sign in button clicked') }}>
                            Sign In
                        </CustomButton>
                    </form>

                    <hr />

                    <CustomButton
                        color="secondary"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                        type="submit"
                        onClick={() => alert('Sign In with Google button clicked!')}
                    >
                        Sign In with Google
                    </CustomButton>
                </Box>
            </Container >

            <Footer />
        </>
    );
};

export default CustomLoginPage;