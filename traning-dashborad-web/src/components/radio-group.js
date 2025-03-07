import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function ControlledRadioButtonsGroup() {
    const [value, setValue] = React.useState('trainee');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="trainer" control={<Radio />} label="Trainer" />
                <FormControlLabel value="trainee" control={<Radio />} label="Trainee" />
            </RadioGroup>
        </FormControl>
    );
}
