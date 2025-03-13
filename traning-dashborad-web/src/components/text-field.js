import { Typography } from "@mui/material";


const CustomTextField = ({data}) => {
    return (
        <Typography data={{
            text: data.title,
            variant: data.variant,
            textAlign: data.alignment,
            sx: { mb: data.mb }
        }}
        />
    )
}

CustomTextField.defaultProps = {
    data: {
        text: 'default text',
        variant: "h5",
        textAlign: "center",
        sx: { mb: 3 }
    }
}
export default CustomTextField;