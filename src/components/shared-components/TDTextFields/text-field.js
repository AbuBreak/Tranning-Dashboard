import { TextField } from "@mui/material";

/*
data={{
            text: data.title,
            variant: data.variant,
            textAlign: data.alignment,
            sx: { mb: data.mb }
        }}
*/

const CustomTextField = (props) => {
    return (
        <TextField
            height={20}
            width={100}
            {...props}
           
        />
    )
}

CustomTextField.defaultProps = {

    value: 'default text',
    variant: "outlined",
    textAlign: "center",
    margin:"normal",
    type: "text",
    error: "",
    helperText: "",
}
export default CustomTextField;