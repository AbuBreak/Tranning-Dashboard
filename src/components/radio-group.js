import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormHelperText } from '@mui/material';

const CusotmRadioButton = ({ value, onChange, error }) => {
    return (
        <FormControl component="fieldset" error={!!error}>
            <RadioGroup row value={value} onChange={onChange}>
                <FormControlLabel value="trainer" control={<Radio />} label="Trainer" />
                <FormControlLabel value="trainee" control={<Radio />} label="Trainee" />
            </RadioGroup>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    );
};

export default CusotmRadioButton;