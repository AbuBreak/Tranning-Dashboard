import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export const signupValidationSchema = yup.object().shape({
    userType: yup.string().required("Please select Trainer or Trainee"),
    username: yup.string().required("Username is required"),
    fName: yup.string().required("First Name is required"),
    lName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    job: yup.string().required("Please select a job"),
    password: yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    confirmPassword: yup.string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
});