import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Container, Button, Typography } from "@mui/material";
import CustomTextField from "../components/shared-components/TDTextFields/text-field";
import CustomAppBar from "../components/shared-components/TDAppBars/app-bar";
import Footer from "../components/shared-components/TDAppBars/footer";
import { loginValidationSchema } from "../utils/validations/validation";

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
            <CustomAppBar title="CourseEase" mail="false" notifications="false" mailCount="0" notificationCount="0" />

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
                <Typography variant="h5" textAlign="center" sx={{ mb: 3 }}>
                    Welcome to CourseEase – The Ultimate Course Management Platform!
                </Typography>

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
                    <Typography variant="h4" gutterBottom>
                        Sign In
                    </Typography>

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

                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Don't have an account? <a href="/signup">Sign Up</a>
                        </Typography>
                        
                        <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }} type="submit">
                            Sign In
                        </Button>
                    </form>

                    <hr />

                    <Button fullWidth variant="contained" color="secondary" sx={{ mt: 2 }}>
                        Sign In with Google
                    </Button>
                </Box>
            </Container>

            <Footer />
        </>
    );
};

export default CustomLoginPage;