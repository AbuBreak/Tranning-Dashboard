import { Button } from "@mui/material";

const CustomButton = (props) => {
    return (
        <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() =>{}}
            {...props}
        />
    );
};

CustomButton.defaultProps = {
    color: "primary",
    disabled: false,
    size: "medium",
};

export default CustomButton;