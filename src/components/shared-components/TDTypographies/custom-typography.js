import { Typography } from "@mui/material";

const CustomTypography = (props) => {
    return (
        <Typography
            sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: '1rem',
                color: 'text.primary',
                variant: "h5",
                textAlign: "center",
                sx: { mb: 3 },
                ...props.sx,
            }}
            {...props}
        >
            {props.children}
        </Typography>
    );
};

CustomTypography.defaultProps = {
    fontFamily: "'Roboto', sans-serif",
    fontSize: '1rem',
    color: 'text.primary',
    variant: "h5",
    textAlign: "center",
    sx: { mb: 3 },
};

export default CustomTypography;